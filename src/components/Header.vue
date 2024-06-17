<template>
    <v-app-bar class="toolbar" app :color="headerColor" dark v-show="!isHidden">
        <v-container class="container-limit">
            <v-row align="center" justify="space-between" class="header-content">
                <!-- Logo -->
                <v-col>
                    <a href="#home">
                        <v-img src="@/assets/images/mwn-logo-completo-blanco.png" alt="MWN Logo" class="logo"></v-img>
                    </a>
                </v-col>

                <!-- Desktop Navigation Menu -->
                <v-col cols="auto" class="d-none d-md-flex">
                    <v-row align="center" no-gutters>
                        <v-col cols="auto" v-for="link in links" :key="link.text">
                            <v-btn :href="link.href" class="mx-2" :class="{ active: isActive(link.href) }">
                                {{ link.text }}
                            </v-btn>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn class="call-to-action btn-without-border" href="#contact"
                                :class="{ active: isActive('#contact') }">
                                Contacto
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>

                <!-- Mobile Hamburger Menu -->
                <v-col cols="auto" class="d-md-none">
                    <v-app-bar-nav-icon @click="drawer = !drawer" />
                </v-col>
            </v-row>
        </v-container>

        <!-- Drawer for Mobile Menu -->
        <v-navigation-drawer v-model="drawer" app temporary
            :class="{ 'custom-drawer': drawer }">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text">
                    <v-list-item-title>
                        <v-btn :href="link.href" block @click="drawer = false" :class="{ active: isActive(link.href) }">
                            {{ link.text }}
                        </v-btn>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-btn class="call-to-action" href="#contact" block @click="drawer = false"
                        :class="{ active: isActive('#contact') }">
                        Contacto
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header',
    data() {
        return {
            links: [
                { text: 'Inicio', href: '#home' },
                { text: 'Conócenos', href: '#our' },
                { text: 'Servicios', href: '#services' },
                { text: 'Historias de Éxito', href: '#stories' }
            ],
            drawer: false,
            headerColor: getComputedStyle(document.documentElement).getPropertyValue('--bg-dark').trim(),
            activeLink: '',
            previousScroll: 0,
            isHidden: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
        this.createObserver();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        isActive(href: string): boolean {
            return this.activeLink === href;
        },
        createObserver() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.activeLink = `#${entry.target.id}`;
                    }
                });
            }, options);

            this.links.forEach(link => {
                const section = document.querySelector(link.href);
                if (section) {
                    observer.observe(section);
                }
            });
        },
        onScroll() {
            const currentScroll = window.scrollY;
            if (currentScroll > this.previousScroll) {
                // Scrolling down
                this.isHidden = true;
            } else {
                // Scrolling up
                this.isHidden = false;
            }
            this.previousScroll = currentScroll;

            const scrollPosition = window.scrollY + 100; // Add a small offset
            this.links.forEach(link => {
                const section = document.querySelector(link.href);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= scrollPosition && rect.bottom > scrollPosition) {
                        this.activeLink = link.href;
                    }
                }
            });
        }
    }
});
</script>
<style scoped>
.header-content {
    flex-wrap: nowrap;
}

.logo {
    max-width: 150px;
}

.call-to-action {
    font-weight: bold;
}

.btn-without-border {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
    border: 3px solid var(--primary-color);
    color: var(--bg-light);
    padding: 20px 30px;
    transition: transform 0.3s ease, background 0.3s ease;
}

.btn-without-border:hover {
    color: var(--primary-color-light);
    background: var(--primary-color);
    transform: scale(1.03);
}

.container-limit {
    min-width: 300px;
}

.toolbar {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-btn.active,
.v-btn:hover {
    font-weight: bold;
    font-size: 1.01em;
    transition: font-size 0.3s ease, font-weight 0.3s ease;
}

.custom-drawer {
            position: fixed !important;
                top: 80px !important;
                height: 270px !important;
                width: 100% !important;
                z-index: 1004;
                left: 0 !important;
                /* right: 0% !important; */
}
</style>

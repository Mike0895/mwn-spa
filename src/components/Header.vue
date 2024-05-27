<template>
    <v-app-bar app :color="headerColor" dark>
        <v-container class="container-limit">
            <v-row align="center" justify="space-between" class="header-content">
                <!-- Logotipo -->
                <v-col cols="auto">
                    <v-img src="/mwn-spa/src/assets/images/mwn-logo-completo-blanco.png" alt="MWN Logo" contain
                        max-width="150" class="logo"></v-img>
                </v-col>

                <!-- Menú de Navegación para Escritorio -->
                <v-col cols="auto" class="d-none d-md-flex">
                    <v-row align="center" no-gutters>
                        <v-col cols="auto" v-for="link in links" :key="link.text">
                            <v-btn :href="link.href" class="mx-2">{{ link.text }}</v-btn>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn color="secondary" class="call-to-action" href="#contact">
                                Contacto
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>

                <!-- Menú Hamburguesa para Móviles -->
                <v-col cols="auto" class="d-md-none">
                    <v-app-bar-nav-icon @click="drawer = !drawer" />
                </v-col>
            </v-row>
        </v-container>

        <!-- Drawer para el Menú en Móviles -->
        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text">
                    <v-list-item-title>
                        <v-btn :href="link.href" block @click="drawer = false">{{ link.text }}</v-btn>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-btn color="secondary" class="call-to-action" href="#contact" block @click="drawer = false">
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
            headerColor: getComputedStyle(document.documentElement).getPropertyValue('--bg-dark').trim()
        };
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

@media (max-width: 600px) {
    .header-content {
        flex-direction: column;
        text-align: center;
    }

    .logo {
        max-width: 100px;
        margin-bottom: 10px;
    }

    .call-to-action {
        width: 100%;
        text-align: center;
    }
}
</style>

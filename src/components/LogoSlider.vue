<template>
    <v-sheet class="mx-auto" max-width="1200">
        <div class="logo-slider">
            <div class="logos-container" :style="containerStyle">
                <div class="logo-item" v-for="(logo, index) in visibleLogos" :key="index">
                    <v-img :src="logo.src" :alt="logo.alt" contain class="logo-image"></v-img>
                </div>
            </div>
        </div>
    </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
    name: 'LogoSlider',
    setup() {
        const logos = ref([
            { src: require('@/assets/images/fnac_logo_negro.png'), alt: 'Logotipo fnac' },
            { src: require('@/assets/images/ists_logo_negro.png'), alt: 'Logotipo utpl' },
            { src: require('@/assets/images/iar_logo_negro.png'), alt: 'Logotipo iar' },
            { src: require('@/assets/images/utpl_logo_negro.jpeg'), alt: 'Logotipo utpl' },
            { src: require('@/assets/images/gestaplus-logo.png'), alt: 'Logotipo gestaplus' },
            { src: require('@/assets/images/Logo_UPNA.svg'), alt: 'Logotipo Upna' },
            { src: require('@/assets/images/aria_logo_negro.png'), alt: 'Logotipo aria' },
            { src: require('@/assets/images/fnac_logo_negro.png'), alt: 'Logotipo upna' },
        ]);

        const duplicatedLogos = ref([...logos.value, ...logos.value, ...logos.value, ...logos.value,]);        
        const visibleLogos = ref(duplicatedLogos);
        const containerStyle = ref({
            transform: 'translateX(0)',
            transition: 'transform 1s linear'
        });

        let offset = 0;
        const logoWidth = 200; // Width of each logo including margin
        const speed = 0.7;
        const visibleCount = Math.min(6, Math.max(4, Math.floor(window.innerWidth / (logoWidth + 20))));

        const slideLogos = () => {
            offset -= logoWidth;
            containerStyle.value = {
                transform: `translateX(${offset}px)`,
                transition: 'transform 1s linear'
            };

            if (Math.abs(offset) >= logoWidth * logos.value.length) {
                setTimeout(() => {
                    offset = 0;
                    containerStyle.value = {
                        transform: `translateX(${offset}px)`,
                        transition: 'none'
                    };
                }, 1000);
            }
        };

        let interval: number;

        const animateSlider = () => {
            offset -= speed;
            if (Math.abs(offset) >= logoWidth * logos.value.length) {
                offset = 0;
                containerStyle.value.transition = 'none';
            } else {
                containerStyle.value.transition = 'transform 0.1s linear';
            }
            containerStyle.value.transform = `translateX(${offset}px)`;
            requestAnimationFrame(animateSlider);
        };


        onMounted(() => {
            requestAnimationFrame(animateSlider);
        });

        return {
            visibleLogos,
            containerStyle
        };
        
    }
});
</script>

<style scoped>
.logo-slider {
    overflow: hidden;
    width: 100%;
}

.logos-container {
    display: flex;
    align-items: center;
}

.logo-item {
    flex: 0 0 auto;
    width: 200px;
    margin: 0 70px;
}

.logo-image {
    max-width: 100px;
    max-height: 100px;
    margin: auto;
}
</style>

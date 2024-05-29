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
            { src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png', alt: 'Logo 1' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png', alt: 'Logo 2' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png', alt: 'Logo 3' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png', alt: 'Logo 4' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png', alt: 'Logo 5' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Logo_doodle_art.png', alt: 'Logo 6' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png', alt: 'Logo 7' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png', alt: 'Logo 8' },
        ]);

        const duplicatedLogos = ref([...logos.value, ...logos.value, ...logos.value]);        
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
    /* Adjust based on the logo width + margin */
    margin: 0 70px;
    /* Adjust margin as needed */
}

.logo-image {
    max-width: 100px;
    max-height: 100px;
    margin: auto;
}
</style>

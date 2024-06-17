<template>
    <v-container class="container-limit">
        <v-sheet class="mx-auto" max-width="1200" max-height="800">
            <v-slide-group v-model="model" class="pa-4" show-arrows center-active :mandatory="true">
                <v-slide-group-item v-for="(image, index) in images" :key="index" v-slot="{ isSelected, toggle }">
                    <v-card class="ma-4" :class="{ 'selected-card': isSelected, 'unselected-card': !isSelected }"
                        height="400" width="400" @click="toggle">
                        <v-img :src="image.src" class="fill-height">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <v-expand-transition>
                            <div v-if="isSelected" class="description pa-2">
                                <h3 class="text-h6">{{ image.title }}</h3>
                                <p>{{ image.description }}</p>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </v-container>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'ImageSlider',
    setup() {
        const model = ref<number | null>(1);
        const images = ref([
            {
                src: require('@/assets/images/img-header/web-ists-mwn.png'),
                alt: 'Rediseño web y posicionamiento web SEO ISTS',
                title: 'ISTS',
                description: 'Rediseño web y posicionamiento web SEO',
            },
            {
                src: require('@/assets/images/img-header/web-aeia-mwn.png'),
                alt: 'Creación de Página Web AEIA',
                title: 'AEIA',
                description: 'Creación de Página Web',
            },
            {
                src: require('@/assets/images/img-header/web-iar-mwn.png'),
                alt: 'SEO, Marketing Digital y Rediseño Web IAR',
                title: 'IAR',
                description: 'SEO, Marketing Digital y Rediseño Web',
            },
            {
                src: require('@/assets/images/img-header/web-fnac-mwn.png'),
                alt: 'Marketing Digital y Diseño Gráfico FNAC',
                title: 'FNAC',
                description: 'Marketing Digital y Diseño Gráfico',
            },
            {
                src: require('@/assets/images/img-header/web-utpl-mwn.png'),
                alt: 'SEO, Marketing Digital y Diseño Gráfico UTPL',
                title: 'UTPL',
                description: 'SEO, Marketing Digital y Diseño Gráfico',
            },
        ]);

        return {
            model,
            images,
        };
    },
});
</script>
<style scoped>
.selected-card {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
    opacity: 1;
}

.unselected-card {
    transition: all 0.3s ease-in-out;
    opacity: 0.5;
}

h3 {
    color: var(--primary-color-light);
    font-size: 1.8rem !important;
    font-weight: bold;
}

.description {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 10px;
}

.v-img img {
    object-fit: cover;
}

.v-slide-group {
    overflow: hidden;
}

@media (max-width: 960px) {
    .v-card {
        height: 300px !important;
        width: 300px !important;
    }

    h3 {
        font-size: 1.2rem !important;
    }

    .description {
        font-size: 0.9rem;
    }
}
@media (max-width: 460px) {
    .v-card {
        height: 300px !important;
        width: 200px !important;
    }
}
    </style>

<template>
    <container class="container-limit">
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
    </container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'ImageSlider',
    setup() {
        const model = ref<number | null>(null);
        const images = ref([
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png',
                title: 'Image 1',
                description: 'Description for Image 1',
            },
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png',
                title: 'Image 2',
                description: 'Description for Image 2',
            },
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png',
                title: 'Image 3',
                description: 'Description for Image 3',
            },
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png',
                title: 'Image 4',
                description: 'Description for Image 4',
            },
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png',
                title: 'Image 5',
                description: 'Description for Image 5',
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
    opacity: 1;
}

.unselected-card {
    transition: all 0.3s ease-in-out;
    opacity: 0.5;
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
</style>
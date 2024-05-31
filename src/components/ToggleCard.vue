<template>
    <v-card class="mx-auto toggle-card" max-width="450" @mouseover="hover = true" @mouseleave="hover = false"
        :elevation="hover ? 10 : 2">
        <v-card-text>
            <v-icon :size="60" large class="icon-ToggleCard">{{ icon }}</v-icon> <!-- Icono dinámico -->
            <p class="text-h4 font-weight-black">{{ title }}</p>
            <p>{{ subtitle }}</p>
            <div class="text-medium-emphasis">{{ description }}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn class="btn-color-togglecard" text="Leer más" variant="text" @click="reveal = !reveal"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <v-card v-if="reveal" class="position-absolute w-100 toggle-content" height="100%" style="bottom: 0;">
                <v-card-text class="pb-0">
                    <p class="text-h4"></p>
                    <p class="text-medium-emphasis">{{ detailedInfo }}</p>
                </v-card-text>

                <v-card-actions class="pt-0">
                    <v-btn class="btn-color-togglecard" text="Cerrar" variant="text" @click="reveal = false"></v-btn>
                </v-card-actions>
            </v-card>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'ToggleCard',
    props: {
        icon: {
            type: String,
            default: 'mdi-star'
        },
        title: {
            type: String,
            default: 'Default Title'
        },
        subtitle: {
            type: String,
            default: 'Default Subtitle'
        },
        description: {
            type: String,
            default: 'Default description text goes here.'
        },
        detailedInfo: {
            type: String,
            default: 'Detailed information text goes here.'
        }
    },
    setup() {
        const reveal = ref(false);
        const hover = ref(false);
        return { reveal, hover };
    }
});
</script>

<style scoped>
.toggle-card {
    position: relative;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.toggle-card:hover {
    border: 4px solid var(--primary-color);
}

.toggle-content {
    background-color: white;
    z-index: 1;
}
.text-h4 {
    color: var(--primary-color);
}
.icon-ToggleCard {
    color: var(--primary-color);
}
.btn-color-togglecard{
    color: var(--primary-color);
}

description {
    color: white !important;
}

</style>

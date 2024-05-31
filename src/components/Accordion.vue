<template>
    <v-container class="container-limit" >
        <v-row class="my-5">
            <v-col cols="12" class="text-center">
                <h3>Preguntas Frecuentas de Nuestros Clientes</h3>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
                <v-expansion-panels class="my-4" variant="inset">
                    <v-expansion-panel v-for="(item, index) in leftItems" :key="index">
                        <v-expansion-panel-title class="custom-title">{{ item.title }}</v-expansion-panel-title>
                        <v-expansion-panel-text class="custom-text">{{ item.text }}</v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="12" md="6">
                <v-expansion-panels class="my-4" variant="inset">
                    <v-expansion-panel v-for="(item, index) in rightItems" :key="index">
                        <v-expansion-panel-title class="custom-title">{{ item.title }}</v-expansion-panel-title>
                        <v-expansion-panel-text class="custom-text">{{ item.text }}</v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Accordion',
    setup() {
        const items = ref([
            { title: '¿Cómo el marketing digital beneficia a mi negocio en Navarra?', text: 'El marketing digital puede aumentar significativamente la visibilidad de tu negocio en Navarra, atraer más clientes potenciales, mejorar el reconocimiento de tu marca y aumentar las ventas mediante estrategias de SEO, SEM y marketing en redes sociales.' },
            { title: '¿Qué incluye el desarrollo web a medida?', text: 'Nuestro desarrollo web a medida incluye el diseño y la creación de sitios web personalizados, optimización para dispositivos móviles, integración de sistemas de gestión de contenidos (CMS), e-commerce, y optimización para motores de búsqueda (SEO).' },
            { title: '¿Qué resultados puedo esperar de la gestión de redes sociales?', text: 'La gestión de redes sociales puede aumentar tu visibilidad online, mejorar la interacción con tu audiencia, construir una comunidad leal en torno a tu marca, y generar tráfico hacia tu sitio web. Además, te permite recibir feedback directo de tus clientes y ajustar tus estrategias en consecuencia.' },
            { title: '¿Cómo mejorará el diseño gráfico mi marca?', text: 'Un buen diseño gráfico mejora la percepción de tu marca, crea una identidad visual coherente y atractiva, y ayuda a comunicar de manera efectiva tus valores y mensajes a tu audiencia. Esto incluye desde el diseño de logotipos hasta materiales promocionales y gráficos para redes sociales.' },
            { title: '¿Qué es una auditoría SEO y por qué la necesito?', text: 'Una auditoría SEO es una revisión exhaustiva de tu sitio web para identificar problemas que pueden estar afectando su rendimiento en los motores de búsqueda. Necesitas una auditoría SEO para mejorar tu ranking, aumentar el tráfico orgánico y asegurar que tu sitio cumpla con las mejores prácticas de SEO.' },
            { title: '¿Qué tipo de contenido se incluye en el marketing de contenidos?', text: 'El marketing de contenidos incluye la creación y distribución de contenido valioso y relevante como blogs, artículos, infografías, videos y publicaciones en redes sociales, diseñado para atraer, educar y convertir a tu audiencia en clientes leales.' }
        ]);

        const leftItems = ref(items.value.slice(0, 3));
        const rightItems = ref(items.value.slice(3, 6));

        return {
            leftItems,
            rightItems
        };
    }
});
</script>

<style scoped>
.custom-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary-color);
}

.custom-text {
    font-size: 1.1rem;
    color: black;
    margin-top: 0.5rem;
}
</style>

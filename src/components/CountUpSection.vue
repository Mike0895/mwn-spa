<template>
    <v-container fluid class="count-up-section">
        <v-row>
            <CountUpCard v-for="(item, index) in counters" :key="index" :endValue="item.value"
                :description="item.description" />
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountUpCard from '@/components/CountUpCard.vue'; // Asegúrate de que la ruta sea correcta

export default defineComponent({
    name: 'CountUpSection',
    components: {
        CountUpCard
    },
    data() {
        return {
            counters: [
                { value: 500, description: 'sitios web creados para negocios de diversos tamaños y sectores' },
                { value: 200, description: 'clientes satisfechos con nuestros servicios de desarrollo web' },
                { value: 90, description: 'de aumento en el tráfico web y las conversiones para nuestros clientes' },
            ],
        };
    },
});
</script>

<style scoped>
.count-up-section {
    padding: 40px 0;
}
</style>

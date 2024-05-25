<template>
    <div>
        <Header />
        <v-container>
            <h1>Contact</h1>
        </v-container>
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
    name: 'Contact',
    components: {
        Header,
        Footer
    }
});
</script>

<style scoped>
/* Añade estilos aquí si es necesario */
</style>

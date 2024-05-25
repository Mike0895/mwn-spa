<template>
    <v-app-bar app>
        <v-toolbar-title>MWN</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn  to="/">Home</v-btn>
        <v-btn  to="/services">Services</v-btn>
        <v-btn  to="/our">Our</v-btn>
        <v-btn  to="/stories">Stories</v-btn>
        <v-btn  to="/contact">Contact</v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Header',
});
</script>

<style scoped>
/* Añade estilos aquí si es necesario */
</style>

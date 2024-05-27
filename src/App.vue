<template>
  <v-app>
    <Header />
    <v-main>
      <Home />
      <Our />
      <Services />
      <Stories />
      <Contact />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Home from './views/Home.vue';
import Our from './views/Our.vue';
import Services from './views/Services.vue';
import Stories from './views/Stories.vue';
import Contact from './views/Contact.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer, Home, Our, Services, Stories, Contact
  }
});
</script>

<style scoped>
/* Puedes añadir estilos específicos para el App.vue aquí si es necesario */
</style>

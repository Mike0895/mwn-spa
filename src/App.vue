<template>
  <v-app>
    <Header />
    
      <Home />
      <Our />
      <Services />
      <Stories />
      <Contact />
    
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
    Home, Services, Our, Stories, Contact ,Footer
  }
});
</script>

<style scoped>
</style>

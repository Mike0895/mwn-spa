<template>
    <v-container class="home-container" id="contact" fluid>
        <ContactForm />
        <Accordion />
        <NewsletterSignup />
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '@/components/ContactForm.vue';
import NewsletterSignup from '@/components/NewsletterSignup.vue';
import Accordion from '@/components/Accordion.vue';


export default defineComponent({
    name: 'Contacto',
    components: {
        ContactForm, NewsletterSignup, Accordion
    }
});
</script>
<style scoped>
.home-container {
background-color: var(--bg-dark);
color: var(--primary-color-light);
padding: 40px 0;
}
.my-5 {
    margin-top: 40px;
    margin-bottom: 40px;
}

.animation {
        animation: slideInFromRight 1.5s ease-in-out;
}

</style>
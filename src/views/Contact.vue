<template>
    <v-container fluid>
        <ContactForm />
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '@/components/ContactForm.vue';

export default defineComponent({
    name: 'Contacto',
    components: {
        ContactForm
    }
});
</script>

<template>
    <v-container class="newsletter-signup-container container-limit" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" md="12">
                <v-card class="pa-4 newsletter-card">
                    <v-row align="center" justify="space-between">
                        <v-col cols="12" md="6">
                            <h2 class="white--text">Sé parte de nuestra newsletter</h2>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-form class="text-field" v-model="valid" ref="form">

                                <v-container class="container-text-field">
                                    <v-text-field v-model="email" label="Tu correo"
                                        :rules="[v => !!v || 'El correo es obligatorio', v => /.+@.+\..+/.test(v) || 'El correo debe ser válido']"
                                        required hide-details></v-text-field>
                                    <v-btn class="btn-text-field" 
                                        @click="submitForm">ENVIAR</v-btn>
                                    </v-container>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar v-model="snackbar">
            Gracias por suscribirte a nuestra newsletter.
        </v-snackbar>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'NewsletterSignup',
    setup() {
        const valid = ref(false);
        const email = ref('');
        const snackbar = ref(false);

        const submitForm = () => {
            if (valid.value) {
                // Aquí puedes agregar la lógica para enviar el correo electrónico al servidor
                snackbar.value = true;
            }
        };

        return {
            valid,
            email,
            snackbar,
            submitForm
        };
    }
});
</script>

<style scoped>
.newsletter-signup-container {
    border-radius: 20px;
    color: white;
}

.newsletter-card {
    background-color: var(--primary-color);
    border-radius: 25px;
}

.white--text {
    color: white;
    padding-left: 20px;
}

.v-text-field {
    width: 100%; 
    background: white !important;
    border-radius: 25px;
}
.container-text-field {
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: nowrap;
background: white;
border-radius: 25px;
padding: 0;
}

.v-btn {
    background: var(--primary-color);
        border-radius: 25px;
        color: white;
        margin: auto;
        padding: 0 30px;
        justify-content: center;
        margin-right: 10px;
}


</style>

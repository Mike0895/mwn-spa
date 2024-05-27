<template>
    <v-container class="newsletter-signup-container" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" md="8">
                <v-card class="pa-4 newsletter-card">
                    <v-row align="center" justify="space-between">
                        <v-col cols="12" md="6">
                            <h2 class="white--text">Sé parte de nuestra newsletter</h2>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-form v-model="valid" ref="form">
                                <v-text-field v-model="email" label="Tu correo"
                                    :rules="[v => !!v || 'El correo es obligatorio', v => /.+@.+\..+/.test(v) || 'El correo debe ser válido']"
                                    required hide-details></v-text-field>
                                <v-btn :disabled="!valid" color="primary" @click="submitForm">ENVIAR</v-btn>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar v-model="snackbar" color="success">
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
    background-color: #1e1e1e;
    border-radius: 20px;
    padding: 20px;
    color: white;
}

.newsletter-card {
    background-color: #0071E3;
    border-radius: 20px;
}

.white--text {
    color: white;
}

.v-text-field {
    display: inline-block;
    width: auto;
}

.v-btn {
    margin-left: 10px;
}
</style>

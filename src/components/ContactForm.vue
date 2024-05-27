<template>
    <v-container class="bg-contact"fluid>
        <v-container class="container-limit">
            <v-container class="contact-form-container">
                <v-card class="pa-4">
                    <v-card-title>
                        <h2>¿Hablamos?</h2>
                    </v-card-title>
                    <v-card-subtitle>
                        Déjanos tus datos y te informaremos de nuestras tarifas.
                    </v-card-subtitle>
                    <v-form v-model="valid" ref="form">
                        <v-text-field v-model="name" label="Nombre y Apellidos"
                            :rules="[v => !!v || 'Nombre es obligatorio']" required></v-text-field>
                        <v-text-field v-model="email" label="Email"
                            :rules="[v => !!v || 'Email es obligatorio', v => /.+@.+\..+/.test(v) || 'Email debe ser válido']"
                            required></v-text-field>
                        <v-text-field v-model="phone" label="Teléfono" :rules="[v => !!v || 'Teléfono es obligatorio']"
                            required></v-text-field>
                        <v-select v-model="plan" :items="plans" label="Selecciona un Plan" item-text="name"
                            item-value="id"></v-select>
                        <v-textarea v-model="message" label="Mensaje"></v-textarea>
                        <v-checkbox v-model="privacy" :rules="[v => !!v || 'Debes aceptar las políticas de privacidad']"
                            label="He leído y acepto la política de privacidad" required></v-checkbox>
                        <v-btn :disabled="!valid" color="primary" @click="submitForm">SOLICITA UNA ASESORÍA
                            GRATUITA</v-btn>
                    </v-form>
                </v-card>
                <v-snackbar v-model="snackbar" color="success">
                    Próximamente una persona se pondrá en contacto contigo.
                </v-snackbar>
            </v-container>
        </v-container>
        </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'ContactForm',
    setup() {
        const valid = ref(false);
        const name = ref('');
        const email = ref('');
        const phone = ref('');
        const plan = ref(null);
        const message = ref('');
        const privacy = ref(false);
        const snackbar = ref(false);

        const plans = ref([
            { id: 1, name: 'Plan 1' },
            { id: 2, name: 'Plan 2' },
            { id: 3, name: 'Plan 3' },
            { id: 4, name: 'Plan 4' },
            { id: 5, name: 'Plan 5' },
            { id: 6, name: 'Plan 6' }
        ]);

        const submitForm = () => {
            if (valid.value) {
                // Almacenar los datos o enviarlos a un servidor aquí
                snackbar.value = true;
            }
        };

        return {
            valid,
            name,
            email,
            phone,
            plan,
            message,
            privacy,
            plans,
            snackbar,
            submitForm
        };
    }
});
</script>

<style scoped>
.bg-contact {
    background: var(--bg-dark);
}
.contact-form-container {
    color: white;
    border-radius: 8px;
    max-width: 800px;
}

.v-card {
    background-color: white;
    border-radius: 8px;
}

.v-card-title {
    color: var(--primary-color);
    font-weight: bold;
}

.v-card-subtitle {
    color: var(--bg-dark);
    margin-bottom: 20px;
}

.v-text-field,
.v-select,
.v-textarea,
.v-checkbox {
    margin-bottom: 20px;
}

.v-btn {
    margin-top: 20px;
}

.v-snackbar {
    background-color: #0071E3;
    color: white;
}
</style>

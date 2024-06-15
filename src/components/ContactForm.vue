<template>
  <v-container class="bg-contact" fluid>
    <v-container class="container-limit">
      <v-container class="contact-form-container">
        <v-card class="pa-4">
          <!-- Card Title -->
          <v-card-title>
            <h2>¿Hablamos?</h2>
          </v-card-title>
          <!-- Card Subtitle -->
          <v-card-subtitle>
            Déjanos tus datos y te informaremos de nuestras tarifas.
          </v-card-subtitle>
          <!-- Form -->
          <v-form v-model="valid" ref="form">
            <!-- Name Input -->
            <v-text-field v-model="name" label="Nombre y Apellidos" :rules="[v => !!v || 'Nombre es obligatorio']"
              required></v-text-field>
            <!-- Email Input -->
            <v-text-field v-model="email" label="Email"
              :rules="[v => !!v || 'Email es obligatorio', v => /.+@.+\..+/.test(v) || 'Email debe ser válido']"
              required></v-text-field>
            <!-- Phone Input -->
            <v-text-field v-model="phone" label="Teléfono" :rules="[v => !!v || 'Teléfono es obligatorio']"
              required></v-text-field>
            <!-- Service Selection -->
            <v-select v-model="plan" :items="plans" label="Selecciona un Servicio" item-text="name"
              item-value="id"></v-select>
            <!-- Message Input -->
            <v-textarea v-model="message" label="Mensaje"></v-textarea>
            <!-- Privacy Checkbox -->
            <v-checkbox v-model="privacy" :rules="[v => !!v || 'Debes aceptar las políticas de privacidad']"
              label="He leído y acepto la política de privacidad" required></v-checkbox>
            <!-- Submit Button -->
            <BtnWithBorder class="btn-container" @click="submitForm">
              SOLICITA UNA AUDITORÍA GRATUITA
            </BtnWithBorder>
          </v-form>
        </v-card>
        <!-- Snackbar Notification -->
        <v-snackbar v-model="snackbar" color="success">
          Próximamente una persona se pondrá en contacto contigo.
        </v-snackbar>
      </v-container>
    </v-container>
  </v-container>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import BtnWithBorder from '@/components/Btn-with-border.vue'; // Ensure the path is correct

export default defineComponent({
  name: 'ContactForm',
  components: {
    BtnWithBorder
  },
  setup() {
    // Form validation
    const valid = ref(false);
    // Form fields
    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const plan = ref<number | null>(null);
    const message = ref('');
    const privacy = ref(false);
    // Snackbar visibility
    const snackbar = ref(false);

    // Available plans
    const plans = ref([
      { id: 1, name: 'Estrategias de Marketing Digital' },
      { id: 2, name: 'Desarrollo Web a Medida y Moderno' },
      { id: 3, name: 'Diseño Gráfico Creativo e Impactante' },
      { id: 4, name: 'Gestión de Redes Sociales y Campañas' },
      { id: 5, name: 'Consultoría y Auditoría SEO' },
      { id: 6, name: 'Marketing de Contenidos' }
    ]);

    // Form submission
    const submitForm = () => {
      if (valid.value) {
        // Handle form submission logic here (e.g., send data to a server)
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

.btn-container {
  margin-top: 20px;
}
</style>


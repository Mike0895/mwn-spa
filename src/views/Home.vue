<template>
    <v-container class="home-container" id="home" fluid>
        <v-container class=" container-limit">
        <v-row align="center" justify="space-between">
            <!-- Texto y Botón -->
            <v-col cols="12" md="6" class="text-section">
                <h1>
                    Convertimos visitantes en <span class="highlight">clientes potenciales</span> para tu negocio, a
                    través de diseños web únicos.
                </h1>
                <p>
                    Nuestro equipo ha contribuido al éxito de sitios web que han generado más de 2 millones de
                    euros.
                </p>
                <Btn-with-border @click="handleButtonClick">SOLICITA UNA AUDITORÍA GRATUITA
                </Btn-with-border>
            </v-col>

            <!-- Imagen -->
            <v-col cols="12" md="6" class="image-section">
                <v-img src="/mwn-spa/src/assets/images/ejemplo-1.png" alt="Laptop and Phone"></v-img>
            </v-col>
        </v-row>
    </v-container>
    </v-container>
</template>


<style scoped>
.home-container {
    background-color: var(--bg-dark);
    color: var(--primary-color-light);
    padding: 40px 0;
}

.text-section {
    text-align: left;
    margin-bottom: 20px;
}

.highlight {
    color: var(--primary-color);
}

.image-section img {
    max-width: 100%;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import BtnWithBorder from '@/components/Btn-with-border.vue';

export default defineComponent({
    name: 'Home',
    components: {
        BtnWithBorder
    },
    methods: {
        handleButtonClick() {
            console.log('Button clicked');
        }
    }
});
</script>
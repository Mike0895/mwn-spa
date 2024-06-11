<template>
    <v-container class="home-container" id="home" fluid>
        <v-container class=" container-limit">
            <v-row align="center" justify="space-between">
                <!-- Texto y Botón -->
                <v-col cols="12" md="6" class="text-section">
                    <h1>
                        Convertimos visitantes en <span class="highlight">clientes potenciales</span> para tu negocio digital en Navarra.
                    </h1>
                    <p>
                        Impulsamos a las PYMES a través de estrategias de Marketing Digital y
                        Desarrollo Web innovador.
                    </p>

                    <Btn-with-border class="btn-container" @click="handleButtonClick">SOLICITA UNA AUDITORÍA
                        GRATUITA
                    </Btn-with-border>

                </v-col>

                <!-- Imagen -->
                <v-col cols="12" md="6" class="image-section">
                    <v-img src="@/assets/images/img-header/portada-mwn-2.webp" alt="Laptop and Phone"></v-img>
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
.btn-container {
    display: flex;
    margin: 40px auto;
    padding: 0 20px;
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
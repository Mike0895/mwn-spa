<template>
    <v-container fluid>
        <v-container class="container-limit">
            <v-row>
                <v-col cols="12" class="text-center my-5">
                    <h2>Casos Reales</h2>
                    <p>
                        Descubre cómo nuestros servicios de diseño y <br>
                        desarrollo web han impulsado el exíto de <br>
                        nuestros clientes.
                    </p>
                </v-col>
            </v-row>
            <ImageSlider />
            <v-row>
                <v-col cols="12" class="text-center my-5">
                    <h2>Hemos ayudado a transformar negocios con nuestros diseños web únicos</h2>
                </v-col>
            </v-row>
            <v-container>
                <CountUp />
            </v-container>
        </v-container>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageSlider from '@/components/ImageSlider.vue';
import CountUp from '@/components/CountUp.vue'; 


export default defineComponent({
    name: 'Historias de éxito',
    components: {
        ImageSlider, CountUp

    }
});
</script>

<style scoped>

.text-center {
    text-align: center;
}

.my-5 {
    margin-top: 40px;
    margin-bottom: 40px;
}

</style>

<template>
    <v-container class="our-container" fluid>
        <v-container class="container-limit">
            <!-- ¿QUÉ HACEMOS? -->
            <v-row class="my-5">
                <v-col cols="12" class="text-center">
                    <h2 class="h2-our">¿QUÉ HACE MWN?</h2>
                    <p>
                        En Offertor, destacamos por nuestra capacidad para desarrollar sitios web personalizados y
                        seguros,
                        con un diseño atractivo y optimizados para motores de búsqueda, garantizando una experiencia
                        óptima en cualquier dispositivo.
                    </p>
                </v-col>
            </v-row>

            <!-- DESARROLLAMOS PARA PYMES COMO PARA GRANDES EMPRESAS -->
            <v-row class="my-5">
                <v-col cols="12" class="text-center">
                    <h3>DESARROLLAMOS PARA PYMES COMO PARA GRANDES EMPRESAS</h3>
                </v-col>
            </v-row>

            <!-- Monitor y Lista -->
            <v-row class="my-5" align="center" justify="center">
                <v-col cols="12" md="6" class="text-center">
                    <v-img src="@/assets/images/ejemplo-1.png" alt="Monitor"></v-img>
                </v-col>
                <v-col cols="12" md="6">
                    <ul>
                        <li>¿No sabes cómo crear un sitio web que atraiga a tus potenciales clientes?</li>
                        <li>¿Necesitas aprovechar al máximo el potencial de tu sitio web para generar leads?</li>
                        <li>¿No sabes cómo destacar frente a la competencia con un diseño web único y atractivo?</li>
                        <li>¿No tienes el tiempo o los conocimientos para crear un sitio web por tu cuenta?</li>
                    </ul>
                </v-col>
            </v-row>

            <!-- ¿Tu sitio web está afectando el crecimiento de tu negocio? -->
            <v-row class="my-5">
                <v-col cols="12" class="text-center">
                    <h3>¿TU SITIO WEB ESTÁ AFECTANDO EL CRECIMIENTO DE TU NEGOCIO?</h3>
                </v-col>
            </v-row>

            <!-- Transformamos tu sitio web... -->
            <v-row class="my-5">
                <v-col cols="12" md="6">
                    <h4>
                        Transformamos tu sitio web en una herramienta de conversión para
                        impulsar tu negocio.
                    </h4>
                    <p>
                        Nuestro equipo altamente capacitado en desarrollo web, estará contigo en todo momento,
                        ofreciendo
                        las soluciones
                        adecuadas para tu negocio y asegurando que siempre esté un paso adelante de la competencia.
                    </p>
                </v-col>
                <v-col cols="12" md="6" class="text-center">
                    <v-img src="@/assets/images/ejemplo-1.png" alt="Ejemplo"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Our',
});
</script>

<style scoped>
.our-container {
    background-color: #ffffff;
    color: #000000;
    padding: 40px 0;
}

.h2-our {
    margin-bottom: 1em;
}
.text-center {
    text-align: center;
}

.my-5 {
    margin-top: 40px;
    margin-bottom: 40px;
}

h2,h3 {
    color: var(--primary-color);
}
h4 {
    color: var(--bg-dark);
}
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 20px;
}
</style>

<template>
    <v-container class="our-container" id="our" fluid>
        <v-container class="container-limit">
            <!-- ¿QUÉ HACEMOS? -->
            <v-row class="my-5">
                <v-col cols="12" class="text-center">
                    <h2 class="h2-our">¿QUÉ HACE MWN?</h2>
                    <p class="p">
                        En MWN, nos especializamos en llevar tu negocio al siguiente nivel a través de estrategias de
                        marketing digital y desarrollo web personalizadas. Ubicados en el corazón de Navarra, combinamos
                        creatividad y tecnología para ofrecer soluciones integrales que abarcan desde la creación de
                        sitios web atractivos y funcionales hasta campañas de marketing digital efectivas que aumentan
                        tu visibilidad online y atraen clientes potenciales.<br><br>
                        En MWN, estamos comprometidos con tu éxito. Únete a nosotros y descubre cómo podemos transformar
                        tu presencia digital y hacer crecer tu negocio en Navarra.
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
                    <v-img src="@/assets/images/img-header/turismo-mwn.webp" alt="Monitor"></v-img>
                </v-col>
                <v-col cols="12" md="6">
                    <p class="p">
                        En MWN, entendemos que cada PYME y
                        corporación, tiene necesidades y objetivos únicos. Por ello, adaptamos nuestras soluciones dando
                        un enfoque personalizado asegura que cada proyecto, reciba la misma dedicación y
                        atención al detalle para alcanzar el éxito. <br><br>
                        <strong>Lo que ofrecemos:</strong><br>
                    </p>
                    <ul>
                        <li><v-icon class="icon-color">mdi-arrow-right</v-icon>Estrategias Personalizadas</li>
                        <li><v-icon class="icon-color">mdi-arrow-right</v-icon>Escalabilidad y Flexibilidad</li>
                        <li><v-icon class="icon-color">mdi-arrow-right</v-icon>Tecnología Avanzada</li>
                        <li><v-icon class="icon-color">mdi-arrow-right</v-icon>Soporte Continuo</li>
                    </ul>
                </v-col>
            </v-row>

            <!-- 3 bloque -->
            <v-row class="my-5">
                <v-col cols="12" class="text-center">
                    <h3>¿ESTÁ TU SITIO WEB IMPULSANDO TU NEGOCIO COMO DEBERÍA?
                    </h3>
                </v-col>
            </v-row>

            <!-- Transformamos tu sitio web... -->
            <v-row class="my-5">
                <v-col cols="12" md="6">
                    <h4>
                        Convertimos tu web en una máquina de conversiones para hacer crecer tu negocio gracias al
                        Marketing Digital.
                    </h4>
                    <p class="p">
                        <br>En MWN, nos especializamos en marketing digital y desarrollo web en Navarra, transformando
                        tu
                        sitio web en una poderosa herramienta de conversión. Nuestro equipo altamente capacitado trabaja
                        contigo para proporcionar soluciones adaptadas específicamente a tu negocio, garantizando que
                        siempre estés un paso adelante de la competencia. Utilizamos las últimas tecnologías y
                        estrategias de SEO para mejorar la visibilidad y el rendimiento de tu sitio web, atrayendo más
                        clientes potenciales y aumentando tus ventas. Confía en nosotros para optimizar tu presencia
                        digital y llevar tu negocio al siguiente nivel.
                    </p>
                </v-col>
                <v-col cols="12" md="6" class="text-center">
                    <v-img src="@/assets/images/img-header/portada-mwn.png" alt="Ejemplo"></v-img>
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
    background-color: var(--primary-color-light);
    color: var(--bg-dark);
    padding: 40px 0;
}
.icon-color {
    color: var(--primary-color);
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

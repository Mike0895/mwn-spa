<template>
    <!-- Sección 1 -->
    <v-container class="services-container" id="services" fluid>
        <v-container class="container-limit">
            <v-row>
                <v-col cols="12" class="text-center my-5">
                    <h2>Nuestros Servicios Digitales</h2>
                </v-col>
            </v-row>

            <v-row>
                <!-- Tarjetas ToggleCard  -->
                <v-col cols="12" md="4" class="my-3" v-for="(card, index) in cards" :key="index">
                    <ToggleCard :icon="card.icon" :title="card.title" :subtitle="card.subtitle"
                        :description="card.description" :detailedInfo="card.detailedInfo" />
                </v-col>
            </v-row>
            <!-- Sección 2  -->
            <v-container class="business-results-container" fluid>
                <v-row align="center" justify="space-between" class="py-5">
                    <!-- Texto y Botón -->
                    <v-col cols="12" md="6" class="text-section">
                        <h2>Tu negocio podría estar dando mejores resultados</h2>
                        <p>
                            <br>Estudiaremos tu negocio y te plantearemos una estrategia 100% personalizada para
                            desarrollar
                            un
                            sitio web efectivo y atractivo que haga crecer tu negocio.
                        </p>
                        <ul class="benefits-list"><br>
                            <li>
                                <v-icon class="icon-check-services" left>mdi-check-circle</v-icon>
                                Sin compromiso
                            </li>
                            <li>
                                <v-icon class="icon-check-services" left>mdi-check-circle</v-icon>
                                100% confidencial
                            </li>
                            <li>
                                <v-icon class="icon-check-services" left>mdi-check-circle</v-icon>
                                30 minutos
                            </li>
                        </ul>
                        <Btn-with-border class="btn-container" @click="handleButtonClick">SOLICITA UNA AUDITORÍA
                            GRATUITA
                        </Btn-with-border>
                    </v-col>

                    <!-- Imagen con Figura Azul -->
                    <v-col cols="12" md="6" class="image-section">
                        <div class="blue-shape">
                            <v-img src="@/assets/images/Citro-Mockup-8-768x768.png.webp" alt="Business Image"
                                class="silueta-imagen"></v-img>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToggleCard from '@/components/ToggleCard.vue'; // Asegúrate de que la ruta sea correcta
import BtnWithBorder from '@/components/Btn-with-border.vue';

export default defineComponent({
    name: 'Services',
    
    components: {
        ToggleCard,
            BtnWithBorder, 
        
    },
    data() {
        return {
            cards: [
                {
                    icon: 'mdi-chart-line',
                    title: 'Estrategias de Marketing Digital',
                    subtitle: 'Potencia tu presencia en línea.',
                    description: '',
                    detailedInfo: 'Aumentamos la visibilidad de tu negocio en Navarra, utilizando el SEO, SEM, y las RR.SS para atraer y convertir más clientes potenciales, asegurando un crecimiento medible.'
                },
                {
                    icon: 'mdi-laptop',
                    title: 'Desarrollo Web a Medida y Moderno',
                    subtitle: 'Soluciones web personalizadas.',
                    description: '',
                    detailedInfo: 'Creamos web únicas y optimizadas para la conversión. Nuestros desarrolladores utilizan las últimas tecnologías para garantizar una excelente experiencia de usuario.'
                },
                {
                    icon: 'mdi-palette-outline',
                    title: 'Diseño Gráfico Creativo e Impactante',
                    subtitle: 'Imágenes que impactan.',
                    description: '',
                    detailedInfo: 'Nuestro equipo crea identidades visuales que capturan la esencia de tu marca. Desde logotipos hasta materiales promocionales para fortalecer tu presencia.'
                },
                {
                    icon: 'mdi-cellphone-message',
                    title: 'Gestión de Redes Sociales y Campañas',
                    subtitle: 'Conecta con tu audiencia',
                    description: '',
                    detailedInfo: 'Administramos y optimizamos tus perfiles en RR.SS y creamos contenido relevante y atractivo que fomenta la interacción y construye una comunidad leal en torno a tu marca.'
                },
                {
                    icon: 'mdi-search-web',
                    title: 'Consultoría y Auditoría SEO',
                    subtitle: 'Mejora tu posicionamiento',
                    description: '',
                    detailedInfo: 'Identificamos y corregimos problemas, y te asesoramos sobre las mejores prácticas para mantener un SEO eficaz para los motores de búsqueda.'
                },
                {
                    icon: 'mdi-camera-front-variant',
                    title: 'Marketing de Contenidos para Pymes',
                    subtitle: 'Contenido que convierte',
                    description: '',
                    detailedInfo: 'Realizamos marketing de contenidos que atrae, educa y convierte a tu audiencia. Creamos blogs, artículos, infografías y videos que posicionan tu marca en su sector.'
                }
            ]
        };
    }, methods: {
        handleButtonClick() {
            console.log('Button clicked');
        }
    }
});
</script>

<style scoped>
.services-container {
    background-color: var(--bg-dark);
    color: var(--bg-light);
    padding: 40px 0;
}
h2 {
    color: var(--bg-light);
}
.text-center {
    text-align: center;
}

.my-5 {
    margin-top: 40px;
    margin-bottom: 40px;
}
.business-results-container {
    background-color: #151518;
    color: white;
    padding: 40px 0;
}

.text-section {
    text-align: left;
    margin-bottom: 20px;
}


.benefits-list {
    list-style: none;
    padding: 0;
}

.benefits-list li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.v-icon {
    margin-right: 10px;
    color: var(--primary-color);
}

.cta-button {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
}

.image-section {
    display: flex;
    justify-content: center;
    align-items: center;
}

.blue-shape {
    background-color: var(--primary-color);
    width: 100%;
    height: 300px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
}
.btn-container {
    display: flex;
    margin: 40px auto;
    padding: 0 20px;
}

.silueta-imagen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
</style>

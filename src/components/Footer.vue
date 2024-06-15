### Template

```html
<template>
    <v-footer>
        <v-container class="footer-container" fluid>
            <v-container class="container-limit">
                <v-row>
                    <!-- Column 1 -->
                    <v-col cols="12" md="3" class="footer-col">
                        <v-img src="@/assets/images/mwn-logo-completo-blanco.png" alt="Logo"
                            class="footer-logo"></v-img>
                        <v-row class="social-icons">
                            <v-col>
                                <v-icon>mdi-facebook</v-icon>
                            </v-col>
                            <v-col>
                                <v-icon>mdi-linkedin</v-icon>
                            </v-col>
                            <v-col>
                                <v-icon>mdi-instagram</v-icon>
                            </v-col>
                            <v-col>
                                <v-icon>mdi-whatsapp</v-icon>
                            </v-col>
                        </v-row>
                        <p><v-icon class="icon-whatsapp" left>mdi-whatsapp</v-icon>+34 666 66 66 66</p>
                        <p><v-icon class="icon-whatsapp" left>mdi-email</v-icon>contacto@mwn.com</p>
                    </v-col>
                    <!-- Column 2 -->
                    <v-col cols="12" md="3" class="footer-col">
                        <h3>Navegación</h3>
                        <ul>
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#our">Conócenos</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#stories">Historias de Éxito</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </v-col>
                    <!-- Column 3 -->
                    <v-col cols="12" md="3" class="footer-col">
                        <h3>¿Dónde estamos?</h3>
                        <p><v-icon left>mdi-map-marker</v-icon>Navarra</p>
                        <h3>Legal</h3>
                        <ul>
                            <li>Política de Privacidad</li>
                            <li>Términos y Condiciones</li>
                            <li>Política de Cookies</li>
                        </ul>
                    </v-col>
                    <!-- Column 4 -->
                    <v-col cols="12" md="3" class="footer-col">
                        <h3>Servicios</h3>
                        <ul>
                            <li>Desarrollo Web</li>
                            <li>Soporte Web</li>
                            <li>Optimización SEO</li>
                            <li>Aumento de Rendimiento</li>
                            <li>Google Ads</li>
                        </ul>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="footer-bottom">
                    <v-col cols="12" md="6">
                        Desarrollado por Marketing Digital y Desarrollo Web Navarra
                    </v-col>
                    <v-col cols="12" md="6" class="text-right">
                        Copyright © 2024. Todos los derechos reservados.
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
    </v-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Footer',
});
</script>
<style scoped>
.v-footer {
    margin: 0;
    padding: 0;
}

.footer-container {
    background-color: var(--bg-dark);
    color: var(--bg-light);
    padding: 0;
    margin: 0;
}

.footer-col {
    margin-bottom: 20px;
}

.footer-logo {
    max-width: 150px;
    margin-bottom: 20px;
}

.social-icons {
    margin-bottom: 20px;
    justify-content: flex-start;
    display: flex;
    flex-grow: 0 !important;
}

.social-icons .v-icon {
    font-size: 24px;
    margin-right: 5px;
    cursor: pointer;
}

.footer-col h3 {
    margin-bottom: 10px;
    color: var(--primary-color);
}

.footer-col p,
.footer-col li {
    margin: 5px 0;
    font-size: 14px;
}

.footer-col ul {
    list-style-type: none;
    padding: 0;
}

.footer-col ul li {
    cursor: pointer;
}

.footer-col ul li:hover {
    color: var(--primary-color);
}
a:hover {
        color: var(--primary-color);
}


.v-icon {
    vertical-align: middle;
}

.footer-bottom {
    padding-top: 20px;
    font-size: 14px;
    color: var(--bg-light);
}

.footer-bottom .text-right {
    text-align: right;
}

.v-divider {
    background-color: var(--bg-light);
    margin: 20px 0;
}

a {
    text-decoration: none;
    color: var(--bg-light);
}

.icon-whatsapp {
    margin-right: 10px;
}
</style>

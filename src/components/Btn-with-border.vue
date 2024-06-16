<template>
  <v-btn class="btn-with-border" href="#contact" @click="handleClick">
    <slot>SOLICITA UNA AUDITORÍA GRATUITA</slot>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BtnWithBorder',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
});
</script>

<style scoped>
.btn-with-border {
  max-width: 50%;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  border: 2px solid var(--primary-color);
  color: var(--primary-color) ;
  background: transparent ;
  padding: 25px 30px !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease;
}

.btn-with-border:hover {
  color: var(--bg-light) ;
  background: var(--primary-color) ;
  transform: scale(1.03);
}
 /* Media query responsive */
 
@media (max-width: 1260px) {
  .btn-with-border {
    max-width: 60%;
    padding: 25px 30px;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .btn-with-border {
    max-width: 80%;
    padding: 20px 25px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .btn-with-border {
    max-width: 90%;
    padding: 15px 20px !important;
    font-size: 12px;
  }
}
</style>

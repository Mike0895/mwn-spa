<template>
  <v-btn class="btn-with-border" href="#contact" @click="handleClick">
    <slot></slot>
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
</style>

<template>
  <v-btn :color="color" class="btn-with-border" @click="handleClick">
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
  font-weight: bold;
    text-transform: uppercase;
    border-radius: 20px;
    border: 2px solid red;
    color: #0071E3;
    background: none;
}


</style>

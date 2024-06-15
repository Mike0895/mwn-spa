<template>
  <v-container fluid class="count-up-section">
    <v-row>
      <CountUpCard
        v-for="(item, index) in counters"
        :key="index"
        :endValue="item.value"
        :description="item.description"
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CountUpCard from "@/components/CountUpCard.vue";

export default defineComponent({
  name: "CountUpSection",
  components: {
    CountUpCard,
  },
  data() {
    return {
      counters: [
        {
          value: 50000,
          description:
            "leads creados en campañas de Marketing Digital",
        },
        {
          value: 10000,
          description:
            "conversiones a través de nuestras web",
        },
        {
          value: 5,
          description:
            "años de experiencia en el sector digitals ",
        },
      ],
    };
  },
});
</script>

<style scoped>
.count-up-section {
  padding: 40px 0;
}
</style>

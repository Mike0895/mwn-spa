<template>
    <v-col cols="12" md="4" class="text-center count-up-card">
        <div class="countup-number"><span>+</span>{{ displayValue }}</div>
        <p>{{ description }}</p>
    </v-col>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'CountUpCard',
    props: {
        endValue: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const displayValue = ref(0);
        const duration = 2500;
        const frameDuration = 1000 / 60;

        onMounted(() => {
            const totalFrames = Math.round(duration / frameDuration);
            let frame = 0;
            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                displayValue.value = Math.round(props.endValue * progress);

                if (frame === totalFrames) {
                    clearInterval(counter);
                }
            }, frameDuration);
        });

        return { displayValue };
    }
});
</script>

<style scoped>
.count-up-card {
    color: var(--bg-dark);
}

.countup-number {
    font-size: 3rem;
    font-weight: bold;
    color: var(--bg-dark);
}

p {
    font-size: 1rem;
}
span{
    color: var(--primary-color);
}
</style>

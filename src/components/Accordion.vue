<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-expansion-panels class="my-4" variant="inset">
                    <v-expansion-panel v-for="(item, index) in leftItems" :key="index">
                        <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
                        <v-expansion-panel-text>{{ item.text }}</v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="12" md="6">
                <v-expansion-panels class="my-4" variant="inset">
                    <v-expansion-panel v-for="(item, index) in rightItems" :key="index">
                        <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
                        <v-expansion-panel-text>{{ item.text }}</v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Accordion',
    setup() {
        const items = ref([
            { title: 'Item 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Item 2', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
            { title: 'Item 3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Item 4', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
            { title: 'Item 5', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { title: 'Item 6', text: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.' }
        ]);

        const leftItems = ref(items.value.slice(0, 3));
        const rightItems = ref(items.value.slice(3, 6));

        return {
            leftItems,
            rightItems
        };
    }
});
</script>

<style scoped>
.v-expansion-panels {
    margin-bottom: 16px;
}
</style>

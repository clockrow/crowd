<template>
    <v-btn text @click="click(num)" class="pr-2 pl-0">
        <v-icon>mdi-chevron-left</v-icon>
        <span>戻る</span>
    </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
    props: {
        click: {
            required: true,
            type: Function as PropType<(num: number) => void>
        },
        num: {
            required: true,
            type: Number
        }
    },
    setup() {
    }
})
</script>

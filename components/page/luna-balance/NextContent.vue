<template>
    <div>
        <v-btn text @click="click(num)" class="pr-2 pl-0">
            <v-icon>mdi-chevron-right</v-icon>
            <span>
                <slot></slot>
            </span>
        </v-btn>
    </div>
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

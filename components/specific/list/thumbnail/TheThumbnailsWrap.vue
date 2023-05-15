<template>
    <v-row justify="center">
        <slot></slot>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        return {};
    },
})
</script>
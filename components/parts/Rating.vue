<template>
    <v-rating background-color="black" color="yellow darken-3" dense half-increments :length="10" readonly :size="15"
        :value="rate"></v-rating>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        rate: {
            type: Number,
            required: true
        }
    },
    setup() {
        return {}
    }
})
</script>

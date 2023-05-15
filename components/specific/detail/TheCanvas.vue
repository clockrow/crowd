<template>
    <v-row justify="center">
        <v-spacer></v-spacer>

        <v-col cols="12" sm="10" md="7" lg="5" xl="4">
            <slot></slot>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        return {}
    }
})
</script>

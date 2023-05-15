<template>
    <v-row>
        <v-spacer></v-spacer>
        <!-- todo  -->
        <v-col cols="12" lg="9">
            <slot></slot>
        </v-col>
        <v-spacer></v-spacer>
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
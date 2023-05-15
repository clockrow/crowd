<template>
    <v-card outlined class="mb-2">
        <v-card-title class="text-subtitle-1 pb-0 mb-4">
            <slot name="header"></slot>
        </v-card-title>
        <v-card-text class="pb-0">
            <slot name="content"></slot>
        </v-card-text>
        <v-card-text>
            <div>
                <slot name="next"></slot>
            </div>
            <div>
                <slot name="back"></slot>
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
    }
})
</script>

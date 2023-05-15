<template>
    <div>
        <v-card-title class="mt-2 justify-center text-h4">{{ gameInfo.title }}</v-card-title>
        <v-divider color="black" class="mx-2 mb-3"></v-divider>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { GameInfo } from '~/assets/games/utils/game_info'

export default defineComponent({
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        }
    },
})
</script>


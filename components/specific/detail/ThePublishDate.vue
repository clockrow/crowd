<template>
    <div>
        <v-card-title class="d-flex text--black">
            <v-icon class="mr-2" color="black">mdi-clock</v-icon>
            <div>公開日時</div>
        </v-card-title>
        
        <v-card-text class="ml-8">{{ gameInfo.publishDate }}</v-card-text>
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
    setup() {
        return {}
    }
})
</script>
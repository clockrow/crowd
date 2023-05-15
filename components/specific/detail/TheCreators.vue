<template>
    <div>
        <v-card-title class="d-flex">
            <v-icon class="mr-2" color="black">mdi-account-multiple</v-icon>
            <div>制作</div>
        </v-card-title>
        <v-card-text>
            <Creator v-for="(creator, index) in gameInfo.creators" :key="index" :game-info="gameInfo"
                :creator="creator" />
        </v-card-text>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { GameInfo } from '~/assets/games/utils/game_info'
import Creator from './Creator.vue'

export default defineComponent({
    components: {
        Creator
    },
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        }
    },
})
</script>

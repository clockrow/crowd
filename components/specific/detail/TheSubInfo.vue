<template>
    <v-card-text>
        <div style="border-left: 3px solid black;" class="pl-4">
            <SubInfo :game-info="gameInfo" />
        </div>
    </v-card-text>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { GameInfo } from '~/assets/games/utils/game_info'
import SubInfo from '~/components/parts/SubInfo.vue'

export default defineComponent({
    components: {
        SubInfo
    },
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        }
    },
})
</script>
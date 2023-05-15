<template>
    <div>
        <v-card-title class="d-flex text--black">
            <v-icon class="mr-2" color="black">mdi-alert-circle</v-icon>
            <div>注意事項</div>
        </v-card-title>
        <v-card-text>
            <ul>
                <li v-for="(precaution, index) in gameInfo.precautions" :key="index">{{ precaution }}</li>
            </ul>
        </v-card-text>
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

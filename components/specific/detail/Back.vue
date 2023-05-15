<template>
    <div class="my-4">
        <nuxt-link
            :to="gameInfo.topUrl"
            style="color: grey;  text-decoration:none; line-height: 100%;"
        >
            <v-icon color="grey">mdi-arrow-left</v-icon>
            <span>戻る</span>
        </nuxt-link>
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
        return {
        }
    }
})
</script>

<template>
    <v-img :src="require(`@/assets/games${gameInfo.detailURL}/${gameInfo.headerImgName}`)" :aspect-ratio="16 / 9"></v-img>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { GameInfo } from '~/assets/games/utils/game_info'

export default defineComponent({
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        },
    },
    setup() {
        return {}
    }
})
</script>

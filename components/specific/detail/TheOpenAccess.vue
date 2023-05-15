<template>
    <div class="pb-4">
        <v-card-title class="d-flex text--black">
            <v-icon class="mr-2" color="black">mdi-pin</v-icon>
            <div>アクセス</div>
        </v-card-title>
        <v-card-text>
            <v-btn class="px-6 ml-4" color="success" @click="openLink()">出題サイト</v-btn>
        </v-card-text>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, } from '@vue/composition-api'
import { GameInfo } from '~/assets/games/utils/game_info'

export default defineComponent({
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        }
    },
    setup(props) {
        const openLink = () => {
            const link = props.gameInfo.url
            const canOpen = window.open(link)
            if (!canOpen) {
                location.href = link;
            }
        }
        return {
            openLink
        }
    }
})
</script>

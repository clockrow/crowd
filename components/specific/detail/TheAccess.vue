<template>
    <div>
        <v-card-title class="d-flex text--black">
            <v-icon class="mr-2" color="black">mdi-pin</v-icon>
            <div>アクセス</div>
        </v-card-title>
        <v-card-text>
            <v-card flat outlined>
                <v-card-title>出題サイトへアクセス</v-card-title>
                <v-card-text class="pb-0">
                    <p class="my-0">公開時刻になると以下のボタンが緑色になります。</p>
                    <p class="mt-0 mb-2">このページをリロードする必要はありません。</p>
                    <p class="my-0">ボタンを押した先で「403」と表示される場合、少し時間をおいてそのページをリロードしてください。</p>
                </v-card-text>
                <v-card-actions class="px-4 mb-3">
                    <v-btn class="px-6 mt-2" color="success" :disabled="disabled" @click="openLink()">出題サイト</v-btn>
                </v-card-actions>
            </v-card>
        </v-card-text>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, ref } from '@vue/composition-api'
import { GameInfo } from '~/assets/games/utils/game_info'

export default defineComponent({
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        }
    },
    setup(props) {
        const disabled = ref(true)
        const canAccess = () => {
            const current = new Date()
            const publish = props.gameInfo.publishDateNum ? new Date(
                props.gameInfo.publishDateNum.year,
                props.gameInfo.publishDateNum.month - 1,
                props.gameInfo.publishDateNum.day,
                props.gameInfo.publishDateNum.hour,
                props.gameInfo.publishDateNum.min,
                props.gameInfo.publishDateNum.sec) : new Date()

            // アクセス権限 
            const permission = (current > publish)

            disabled.value = !permission
        }
        const openLink = () => {
            const link = props.gameInfo.url
            const canOpen = window.open(link)
            if (!canOpen) {
                location.href = link;
            }
        }
        onMounted(() => {
            setInterval(canAccess, 1000)
        })
        return {
            disabled, openLink
        }
    }
})
</script>

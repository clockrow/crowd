<template>
    <TheCanvas>
        <Back :game-info="unidentifiedInfo" />
        <TheCard>
            <!-- ヘッダー  -->
            <HeaderImg :game-info="unidentifiedInfo" />
            <TheTitle :game-info="unidentifiedInfo" />
            <TheSubInfo :game-info="unidentifiedInfo" />

            <!-- 詳細  -->
            <TheCreators :game-info="unidentifiedInfo" />

            <ThePublishDate :game-info="unidentifiedInfo" />

            <ThePrecaution :game-info="unidentifiedInfo" />

            <TheAccess :game-info="unidentifiedInfo" />

            <TheRanking :game-info="unidentifiedInfo" :rankingItemsInit="rankingItems" />
        </TheCard>
    </TheCanvas>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import { unidentifiedInfo } from '~/assets/games/kaii/unidentified/settings'

import TheCanvas from '~/components/specific/detail/TheCanvas.vue'
import HeaderImg from '~/components/parts/HeaderImg.vue'
import TheTitle from '~/components/specific/detail/TheTitle.vue'
import TheSubInfo from '~/components/specific/detail/TheSubInfo.vue'
import TheCreators from '~/components/specific/detail/TheCreators.vue'
import ThePrecaution from '~/components/specific/detail/ThePrecaution.vue'
import TheAccess from '~/components/specific/detail/TheAccess.vue'
import TheCard from '~/components/specific/detail/TheCard.vue'
import ThePublishDate from '~/components/specific/detail/ThePublishDate.vue'
import Back from '~/components/specific/detail/Back.vue'
import TheRanking from '~/components/specific/detail/TheRanking.vue'
import { User } from "@/assets/variables/ranking"

export default defineComponent({
    components: {
        TheCanvas,
        HeaderImg,
        TheSubInfo,
        TheTitle,
        TheCreators,
        ThePrecaution,
        TheAccess,
        TheCard,
        ThePublishDate,
        Back, TheRanking
    },
    setup() {
        const rankingItems: User[] = [
            { "name": "鳳。", "time": "2022/04/30 22:54:23", "rank": 1 }, { "name": "零狐春", "time": "2022/04/30 23:21:56", "rank": 2 }, { "name": "エグミロイド", "time": "2022/04/30 23:34:06", "rank": 3 }, { "name": "鈴木雅也", "time": "2022/04/30 23:40:07", "rank": 4 }, { "name": "みつこ", "time": "2022/04/30 23:54:30", "rank": 5 }, { "name": "みつこのしもべ", "time": "2022/05/01 00:02:17", "rank": 6 }, { "name": "Hydra", "time": "2022/05/01 00:06:35", "rank": 7 }, { "name": "あさかぜ", "time": "2022/05/01 00:23:03", "rank": 8 }, { "name": "LIMITED", "time": "2022/05/01 00:34:44", "rank": 9 }, { "name": "ぱんちょ！/とみの/ギガマイン", "time": "2022/05/01 01:14:37", "rank": 10 }, { "name": "peca謎解き部", "time": "2022/05/01 01:19:09", "rank": 11 }, { "name": "お米バンク", "time": "2022/05/01 01:23:57", "rank": 12 }, { "name": "Amooooongonobass", "time": "2022/05/01 02:07:07", "rank": 13 }, { "name": "NazoGram(一仙,さっしー)", "time": "2022/05/01 02:50:35", "rank": 14 }, { "name": "鯖専門店", "time": "2022/05/01 03:09:35", "rank": 15 }, { "name": "おさかないる", "time": "2022/05/01 08:58:14", "rank": 16 }, { "name": "たひち", "time": "2022/05/01 10:08:59", "rank": 17 }, { "name": "ENIG-ROID 2022", "time": "2022/05/01 13:48:50", "rank": 18 }, { "name": "シェン", "time": "2022/05/01 16:43:00", "rank": 19 }, { "name": "レイズと愉快な仲間たち", "time": "2022/05/02 21:41:39", "rank": 20 }, { "name": "じろう", "time": "2022/05/02 22:39:01", "rank": 21 }, { "name": "よんなな", "time": "2022/05/03 00:28:17", "rank": 22 }]

        return { unidentifiedInfo, rankingItems }
    }
})
</script>

<template>
    <TheCanvas>
        <Back :game-info="lunarBalanceInfo" />
        <TheCard>
            <!-- ヘッダー  -->
            <HeaderImg :game-info="lunarBalanceInfo" />
            <TheTitle :game-info="lunarBalanceInfo" />
            <TheSubInfo :game-info="lunarBalanceInfo" />

            <!-- 詳細  -->
            <TheCreators :game-info="lunarBalanceInfo" />

            <ThePublishDate :game-info="lunarBalanceInfo" />

            <ThePrecaution :game-info="lunarBalanceInfo" />

            <TheAccess :game-info="lunarBalanceInfo" />

            <TheHints />

            <TheRanking :game-info="lunarBalanceInfo" :rankingItemsInit="rankingItems" />
        </TheCard>
    </TheCanvas>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import { lunarBalanceInfo } from '~/assets/games/kaii/lunar-balance/settings'

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
import TheHints from '~/components/page/luna-balance/TheHints.vue'
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
        Back, TheRanking, TheHints
    },
    setup() {
        const rankingItems: User[] = [
            { "name": "ENIG-ROID2022", "time": "2022/05/14 21:55:43", "rank": 1 },
            { "name": "KNC", "time": "2022/05/14 22:09:57", "rank": 2 },
            { "name": "エグミロイド", "time": "2022/05/14 22:16:06", "rank": 3 }, { "name": "NazoGram", "time": "2022/05/14 22:31:33", "rank": 4 },
            { "name": "零狐春", "time": "2022/05/14 22:35:15", "rank": 5 },
            { "name": "Pharmeleon", "time": "2022/05/14 23:15:34", "rank": 6 }, { "name": "Hydra", "time": "2022/05/14 23:36:01", "rank": 7 },
            { "name": "鯖専門店", "time": "2022/05/14 23:42:47", "rank": 8 },
            { "name": "#juggler_lin", "time": "2022/05/15 00:00:44", "rank": 9 },
            { "name": "なつ天", "time": "2022/05/15 00:32:25", "rank": 10 }, { "name": "よんなな", "time": "2022/05/15 00:34:12", "rank": 11 },
            { "name": "LiMiTeD", "time": "2022/05/15 00:43:38", "rank": 12 },
            { "name": "チかラが欲しい蚊", "time": "2022/05/15 03:37:30", "rank": 13 },
            { "name": "シェン", "time": "2022/05/15 05:34:44", "rank": 14 },
            { "name": "れき", "time": "2022/05/15 10:22:59", "rank": 15 }, { "name": "おさか ないる", "time": "2022/05/15 16:45:43", "rank": 16 },
            { "name": "レイズと愉快な仲間たち", "time": "2022/05/15 22:32:49", "rank": 17 }]
        return { lunarBalanceInfo, rankingItems }
    }
})
</script>

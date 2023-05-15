<template>
    <TheCanvas>
        <Back :game-info="comazeInfo" />
        <TheCard>
            <!-- ヘッダー  -->
            <HeaderImg :game-info="comazeInfo" />
            <TheTitle :game-info="comazeInfo" />
            <TheSubInfo :game-info="comazeInfo" />

            <!-- 詳細  -->
            <TheCreators :game-info="comazeInfo" />

            <ThePublishDate :game-info="comazeInfo" />

            <ThePrecaution :game-info="comazeInfo" />

            <TheAccess :game-info="comazeInfo" />

            <TheRanking :game-info="comazeInfo" :rankingItemsInit="rankingItems" />
        </TheCard>
    </TheCanvas>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import { comazeInfo } from '@/assets/games/kaii/comaze/settings'

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
            { "name": "Hydra", "time": "2022/05/06 23:32:05", "rank": 1 },
            { "name": "ENIG-ROID2022", "time": "2022/05/06 23:48:35", "rank": 2 },
            { "name": "エグミロイド", "time": "2022/05/07 00:07:54", "rank": 3 }, { "name": "と", "time": "2022/05/07 01:52:02", "rank": 4 },
            { "name": "Pharmeleon(雅也)", "time": "2022/05/07 02:56:36", "rank": 5 },
            { "name": "シェン", "time": "2022/05/07 03:54:17", "rank": 6 },
            { "name": "とりき", "time": "2022/05/07 08:53:20", "rank": 7 },
            { "name": "よんなな", "time": "2022/05/07 22:43:22", "rank": 8 },
            { "name": "EM", "time": "2022/05/09 18:28:56", "rank": 9 },
            { "name": "あさかぜ", "time": "2022/05/09 20:49:25", "rank": 10 },
            { "name": "NazoGram　一仙、さむ、さっ、もり", "time": "2022/05/09 20:56:29", "rank": 11 }
        ]

        return { comazeInfo, rankingItems }
    }
})
</script>

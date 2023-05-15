<template>
    <TheCanvas>
        <Back :game-info="tokiteInfo" />
        <TheCard>
            <!-- ヘッダー  -->
            <HeaderImg :game-info="tokiteInfo" />
            <TheTitle :game-info="tokiteInfo" />
            <TheSubInfo :game-info="tokiteInfo" />

            <!-- 詳細  -->
            <TheCreators :game-info="tokiteInfo" />

            <ThePublishDate :game-info="tokiteInfo" />

            <ThePrecaution :game-info="tokiteInfo" />

            <TheOpenAccess :game-info="tokiteInfo" />
        </TheCard>
    </TheCanvas>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import { tokiteInfo } from '~/assets/games/line2022/tokite/settings'

import TheCanvas from '~/components/specific/detail/TheCanvas.vue'
import HeaderImg from '~/components/parts/HeaderImg.vue'
import TheTitle from '~/components/specific/detail/TheTitle.vue'
import TheSubInfo from '~/components/specific/detail/TheSubInfo.vue'
import TheCreators from '~/components/specific/detail/TheCreators.vue'
import ThePrecaution from '~/components/specific/detail/ThePrecaution.vue'
import TheOpenAccess from '~/components/specific/detail/TheOpenAccess.vue'
import TheCard from '~/components/specific/detail/TheCard.vue'
import ThePublishDate from '~/components/specific/detail/ThePublishDate.vue'
import Back from '~/components/specific/detail/Back.vue'
import TheRanking from '~/components/specific/detail/TheRanking.vue'

export default defineComponent({
    components: {
        TheCanvas,
        HeaderImg,
        TheSubInfo,
        TheTitle,
        TheCreators,
        ThePrecaution,
        TheOpenAccess,
        TheCard,
        ThePublishDate,
        Back, TheRanking
    },
    setup() {
        return { tokiteInfo }
    }
})
</script>

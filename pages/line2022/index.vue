<template>
    <Canvas>
        <HeaderTitle title="2022年LINE謎" sub-title="新年度記念" />

        <ThumbnailsWrap>
            <Thumbnail :game-info="tekiseiInfo" />
            <Thumbnail :game-info="tokiteInfo" />
        </ThumbnailsWrap>
        <ThumbnailsWrap>
            <Thumbnail :game-info="happinessInfo" />
            <Thumbnail :game-info="knowledgeInfo" />
        </ThumbnailsWrap>
    </Canvas>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Thumbnail from '~/components/specific/list/thumbnail/Thumbnail.vue'
import HeaderTitle from '~/components/specific/list/TheHeaderTitle.vue';
import Canvas from '~/components/specific/list/TheCanvas.vue';
import ThumbnailsWrap from '~/components/specific/list/thumbnail/TheThumbnailsWrap.vue';

import { tekiseiInfo } from '~/assets/games/line2022/tekisei/settings';
import { tokiteInfo } from '~/assets/games/line2022/tokite/settings';
import { happinessInfo } from "@/assets/games/line2022/happiness/settings"
import { knowledgeInfo } from '~/assets/games/line2022/knowledge/settings';

export default defineComponent({
    setup() {
        return { happinessInfo, knowledgeInfo, tekiseiInfo, tokiteInfo };
    },
    components: { Thumbnail, HeaderTitle, Canvas, ThumbnailsWrap }
})
</script>

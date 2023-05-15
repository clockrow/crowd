<template>
  <Canvas>
    <HeaderTitle title="怪異" sub-title="怪異襲来に備えよ" />

    <ThumbnailsWrap>
      <Thumbnail :game-info="unidentifiedInfo" />
      <Thumbnail :game-info="comazeInfo" />
      <Thumbnail :game-info="lunarBalanceInfo" />
    </ThumbnailsWrap>
  </Canvas>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Thumbnail from '~/components/specific/list/thumbnail/Thumbnail.vue'
import HeaderTitle from '~/components/specific/list/TheHeaderTitle.vue';
import Canvas from '~/components/specific/list/TheCanvas.vue';
import ThumbnailsWrap from '~/components/specific/list/thumbnail/TheThumbnailsWrap.vue';

import { comazeInfo } from '~/assets/games/kaii/comaze/settings';
import { unidentifiedInfo } from '~/assets/games/kaii/unidentified/settings';
import { lunarBalanceInfo } from '~/assets/games/kaii/lunar-balance/settings';

export default defineComponent({
  setup() {
    return { comazeInfo, unidentifiedInfo, lunarBalanceInfo };
  },
  components: { Thumbnail, HeaderTitle, Canvas, ThumbnailsWrap }
})
</script>

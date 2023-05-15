<template>
  <Canvas>
    <HeaderTitle title="TOP" sub-title="C-lock-rowの不定期謎投稿プラットフォーム" />

    <ThumbnailsWrap>
      <v-img :src="require('@/assets/img/crowd.png')" max-width="500" />
    </ThumbnailsWrap>
  </Canvas>
</template >
    
<script lang=" ts">
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

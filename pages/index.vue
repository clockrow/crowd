<template>
  <Canvas>
    <HeaderTitle title="TOP" sub-title="C-lock-rowの不定期謎投稿プラットフォーム" />

    <ThumbnailsWrap>
      <v-img :src="require('@/assets/img/crowd.png')" max-width="500" />
    </ThumbnailsWrap>
  </Canvas>
</template >
    
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HeaderTitle from '~/components/specific/list/TheHeaderTitle.vue';
import Canvas from '~/components/specific/list/TheCanvas.vue';
import ThumbnailsWrap from '~/components/specific/list/thumbnail/TheThumbnailsWrap.vue';

export default defineComponent({
  components: { HeaderTitle, Canvas, ThumbnailsWrap }
})
</script>

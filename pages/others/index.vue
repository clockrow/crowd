<template>
    <Canvas>
        <HeaderTitle title="その他" sub-title="Coming Soon" />
    </Canvas>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Thumbnail from '~/components/specific/list/thumbnail/Thumbnail.vue'
import HeaderTitle from '~/components/specific/list/TheHeaderTitle.vue';
import Canvas from '~/components/specific/list/TheCanvas.vue';
import ThumbnailsWrap from '~/components/specific/list/thumbnail/TheThumbnailsWrap.vue';

export default defineComponent({
    setup() {
        return {};
    },
    components: { Thumbnail, HeaderTitle, Canvas, ThumbnailsWrap }
})
</script>
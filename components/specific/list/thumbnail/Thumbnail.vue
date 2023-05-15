<template>
    <v-col cols="12" sm="6" md="4" lg="4" xl="3" align="center" min-width="300">
        <v-card min-width="300" max-width="400">
            <!-- ヘッダー画像 -->
            <v-img :src="require(`@/assets/games${gameInfo.detailURL}/${gameInfo.headerImgName}`)"
                :aspect-ratio="16 / 9" :class="['white--text', $style.headerImg]">
                <!-- PLAYアイコン  -->
                <v-btn fab absolute nuxt color="white" :class="$style.playBtn" :to="gameInfo.detailURL">
                    <v-icon x-large color="black">mdi-play</v-icon>
                </v-btn>
            </v-img>

            <!-- タイトル  -->
            <v-card-title>
                <v-row justify="start" no-gutters class="mt-1">
                    <v-col cols="12">
                        <p>{{ gameInfo.title }}</p>
                    </v-col>
                    <v-col cols="12">
                        <v-divider color="black"></v-divider>
                    </v-col>
                </v-row>
            </v-card-title>

            <v-card-text>
                <SubInfo :game-info="gameInfo" />
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { GameInfo } from '~/assets/games/utils/game_info'
import SubInfo from '~/components/parts/SubInfo.vue'

export default defineComponent({
    components: {
        SubInfo
    },
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        }
    },
})
</script>

<style module>
.headerImg {
    position: relative;
}

.playBtn {
    right: 12px;
    bottom: 12px;
}
</style>
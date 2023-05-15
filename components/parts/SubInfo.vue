<template>
    <div>
        <!-- 難易度 -->
        <v-row v-show="showRating" justify="start" class="mb-1" no-gutters>
            <v-col class="d-flex">
                <v-icon small class="mr-1" color="black">mdi-lock</v-icon>

                <span :class="['black--text', 'mr-1', $style['un-wrap']]">難易度:</span>

                <Rating :rate="difficulty" />
            </v-col>
        </v-row>

        <!-- 形式  -->
        <v-row v-show="showFormat" justify="start" class="mb-1" no-gutters>
            <v-col class="d-flex">
                <v-icon small class="mr-1" color="black">mdi-format-list-bulleted</v-icon>
                <div class="black--text">形式: {{ gameInfo.format || "" }}</div>
            </v-col>
        </v-row>

        <!-- プレイ時間 -->
        <v-row justify="start" class="mb-2" no-gutters>
            <v-col class="d-flex">
                <v-icon small class="mr-1" color="black">mdi-clock-outline</v-icon>
                <div class="black--text">想定プレイ時間: {{ gameInfo.playingTime }}</div>
            </v-col>
        </v-row>

        <!-- コメント  -->
        <v-row v-show="showComment" justify="start" class="ml-0" no-gutters>
            <v-col class="d-flex">
                <p class="mb-0 black--text">{{ gameInfo.comment || "" }}</p>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { GameInfo } from '~/assets/games/utils/game_info'
import Rating from './Rating.vue'

export default defineComponent({
    components: {
        Rating
    },
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        }
    },
    setup(props) {
        // ======== レーティング ========
        // レートを表示するか 
        const showRating = computed(() => {
            if (props.gameInfo.difficulty == null) return false
            else return true
        })
        // 難易度 (設定されていない場合がある) 
        const difficulty = computed(() => {
            if (props.gameInfo.difficulty == null) return 0
            else return props.gameInfo.difficulty
        })



        // ======== フォーマット ========
        const showFormat = computed(() => {
            if (props.gameInfo.format == null) return false
            else return true
        })

        // ======== コメント ========
        const showComment = computed(() => {
            if (props.gameInfo.comment == null) return false
            else return true
        })

        return {
            difficulty, showRating, showFormat, showComment
        }
    }
})
</script>

<style module>
.un-wrap {
    display: inline-block;
}
</style>
<template>
    <v-card outlined class="mb-2">
        <div class="d-flex">
            <v-avatar class="mt-5 ml-3">
                <v-img :src="require(`@/assets/games${gameInfo.detailURL}/${creator.avatarImgName}`)"></v-img>
            </v-avatar>
            <div>
                <v-card-title>{{ creator.name }}</v-card-title>
                <v-card-subtitle>{{ creator.role }}</v-card-subtitle>
            </div>
            <v-spacer></v-spacer>
            <v-card-actions>
                <v-btn v-show="twitterBtnShow" icon :href="twitterURL">
                    <v-icon color="#1DA1F2">mdi-twitter</v-icon>
                </v-btn>
            </v-card-actions>
        </div>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Creator, GameInfo } from "@/assets/games/utils/game_info"

export default defineComponent({
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        },
        creator: {
            type: Object as PropType<Creator>,
            required: true
        },

    },
    setup(props) {
        const twitterBtnShow =
            props.creator.twitter !== undefined

        const twitterURL: string = props.creator.twitter ? `https://twitter.com/${props.creator.twitter}` : ""

        return {
            twitterBtnShow, twitterURL
        }
    }
})
</script>

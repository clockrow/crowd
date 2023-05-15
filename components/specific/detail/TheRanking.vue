<template>
    <div>
        <v-card-title class="d-flex pb-0">
            <v-icon class="mr-2" color="black">mdi-poll</v-icon>
            <div>ランキング</div>
        </v-card-title>

        <v-card-text>
            <v-text-field v-model="searchStr" 
            append-icon="mdi-magnify" label="検索" single-line hide-details />
            
            <v-expand-transition>
                <v-data-table :headers="rankingHeaders"        
                    :items="rankingItems"       
                    :items-per-page="10"
                    :footer-props="{ 'items-per-page-text': '' }" :search="searchStr" 
                    class="elevation-1">

                    <template #item.action="{ item }">
                        <v-btn fab small depressed color="white" @click="tweetRank(item)">
                            <v-icon small>mdi-share-variant</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-expand-transition>
        </v-card-text>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from '@vue/composition-api'
import axios, { AxiosResponse } from "axios"
import { GameInfo } from '~/assets/games/utils/game_info'
import { User } from "@/assets/variables/ranking"

export default defineComponent({
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        },
        rankingItemsInit: {
            type: Array as PropType<User[]>,
            required: true
        }
    },
    setup(props) {
        const searchStr = ref("")
        const rankingHeaders = [
            { text: '順位', align: 'start', sortable: false, value: 'rank' },
            { text: '名前', align: 'start', sortable: false, value: 'name' },
            { text: '時刻', align: 'start', sortable: false, value: 'time' },
            { text: '共有する', align: 'right', sortable: false, value: 'action' },
        ]
        const rankingItemsBuff = props.rankingItemsInit.map((user, index) => ({
            rank: index + 1,
            name: user.name,
            time: user.time
        }))
        const rankingItems = ref<User[]>(rankingItemsBuff)

        const fetchRanking = async () => {
            await axios.get(props.gameInfo.rankingUrl || "")
                .then((res: AxiosResponse<User[]>) => {
                    const buff = res.data.slice().sort((a, b) => {
                        if (a.rank < b.rank) return -1
                        if (a.rank > b.rank) return 1
                        return 0
                    })
                    rankingItems.value = buff.map((user, index) => ({
                        rank: index + 1,
                        name: user.name,
                        time: user.time
                    }))
                })
        }

        if (rankingItems.value.length === 0) fetchRanking()

        // tweet 
        const tweetRank = (user: User) => {
            const url = "https://twitter.com/intent/tweet"
                + `?text=【${props.gameInfo.title} ランキング】\n\n順位：${user.rank}位\n名前：${user.name}\nクリア時刻：${user.time}\n\n`
                + "&via=C_lock_row"
                + `&url=${props.gameInfo.url}`
                + `&hashtags=${props.gameInfo.hashtag}`

            const encodedURL = encodeURI(url)
            if (!window.open(encodedURL, '_blank')) {
                window.location.href = encodedURL
            }
        }

        return {
            rankingHeaders, rankingItems, searchStr, tweetRank
        }
    }
})
</script>
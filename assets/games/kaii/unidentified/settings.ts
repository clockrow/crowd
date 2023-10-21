import { GameInfo } from "@/assets/games/utils/game_info"

export const unidentifiedInfo: GameInfo = {
    title: "正体不明",
    creatorName: "こーやん",
    difficulty: 7,
    playingTime: "1～2時間",
    comment: "わたしは何者?",
    headerImgName: "header.png",
    directoryName: "unidentified",
    detailURL: "/kaii/unidentified",
    creators: [
        {
            name: "こーやん",
            role: "謎制作",
            avatarImgName: "koyan.png",
            twitter: "koyan97"
        },
        {
            name: "かい",
            role: "Web実装",
            avatarImgName: "kai.jpg"
        }
    ],
    precautions: [
        "チーム戦・協力行為を推奨します。",
        "試行錯誤と多少の知識を必要とします。",
        "謎解きに必要となる情報を検索しても構いませんが、検索難易度は高くありません。",
        "Chrome、Safariなどの主要なブラウザでのプレイをお願いします。",
        "ソースコードを見る必要はありません。",
        "ヒントは出題サイト内で公開されます。"
    ],
    publishDate: "2022/04/30(土) 22:00",
    publishDateNum: {
        year: 2022,
        month: 4,
        day: 30,
        hour: 22,
        min: 0,
        sec: 0,
    },
    url: "https://clockrow.github.io/unidentified/",
    topUrl: "/kaii",
    rankingUrl: "",
    hashtag: "正体不明謎"
}
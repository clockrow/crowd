import { GameInfo } from "../../utils/game_info"



export const comazeInfo: GameInfo = {
    title: "CoMaze",
    creatorName: "komei",
    difficulty: 10,
    playingTime: "3時間~",
    comment: "perfect maze control",
    headerImgName: "header.png",
    directoryName: "comaze",
    detailURL: "/kaii/comaze",
    creators: [
        {
            name: "komei",
            role: "謎制作",
            avatarImgName: "komei.jpg",
            twitter: "komei0531"
        },
        {
            name: "かい",
            role: "Web実装",
            avatarImgName: "kai.jpg"
        }
    ],
    precautions: [
        "Webフォントをブロックしないでください。",
        "チームで解くことを推奨します。",
        "Chrome、Safariなどの主要なブラウザでのプレイをお願いします。",
        "ソースコードを見る必要はありません。",
        "ヒントは出題サイト内で公開されます。"
    ],
    publishDate: "2022/05/06(金) 21:00",
    publishDateNum: {
        year: 2022,
        month: 5,
        day: 6,
        hour: 21,
        min: 0,
        sec: 0,
    },
    url: "https://comaze.vercel.app",
    topUrl: "/kaii",
    rankingUrl: "",
    hashtag: "コメイズ"
}
export type Creator = {
    name: string,
    role: string,
    avatarImgName: string,
    twitter?: string,
}

export type GameInfo = {
    // タイトル 
    title: string
    creatorName: string,
    // 形式 (LINE謎とか)
    format?: string
    // 難易度 (0~10) 
    difficulty?: number,
    playingTime: string,
    comment?: string,
    headerImgName?: string,
    directoryName: string,
    detailURL: string,
    creators: Creator[],
    precautions?: string[],
    publishDate: string,
    publishDateNum?: {
        year: number,
        month: number,
        day: number,
        hour: number,
        min: number,
        sec: number,
    }
    url: string,
    // サムネイルページ名 
    topUrl: string,
    rankingUrl?: string,
    // ハッシュタグ 
    hashtag?: string
}
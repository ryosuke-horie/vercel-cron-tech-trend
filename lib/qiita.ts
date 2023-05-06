import axios from "axios";

type APIResponse = {
    node: {
        title: string
        linkUrl: string
    }
}

// https://qiita.com/HelloRusk/items/803f9599cde72810f1a8
// 上記の記事で公開されているAPIを利用。
// Qiitaのトレンド記事をスクレイピングしたものをJSONで返すもの。
const QiitaTrendURL: string = 'https://qiita-api.vercel.app/api/trend'

// Qiitaトレンドを取得し、メール本文用の文章に変換する。
const getQiitaTrend = async(): Promise<string> => {
    let mailBodyText: string = '【Qiita】\n'
    let response = await axios.get(QiitaTrendURL);

    await response.data.forEach((element: APIResponse) => {
        mailBodyText = mailBodyText + element.node.title + '\n (' + element.node.linkUrl + ')' + '\n'
        mailBodyText = mailBodyText + '---------------- \n'
    });

    return mailBodyText
}

export default getQiitaTrend
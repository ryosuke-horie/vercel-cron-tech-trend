import nodemailer from 'nodemailer' // メール送信用ライブラリ
require('dotenv').config();

// メール送信処理
const sendMail = (bodyText: string) => {
    // 認証情報などを設定してNodemailerオブジェクトを生成
    const porter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_ADDRESS, // Gmailアカウント
            pass: process.env.GMAIL_PASS // アプリパスワード
        }
    })

    // メールを送信する
    porter.sendMail({
        from: process.env.MAIL_ADDRESS,
        to: process.env.MAIL_ADDRESS,
        subject: '[定期送信]トレンド記事', // 件名
        text: bodyText // メール本文
    }, function (err, info) {
        if (err) { // エラーの場合
            console.error(err)
        }
        // 正しく送信できた場合
        console.log('ok', info)
    })
}

export default sendMail
import { NextApiRequest, NextApiResponse } from 'next';
import getQiitaTrend from '../../lib/qiita';
import getZennTrend from '../../lib/zenn';
import sendMail from '../../lib/send-main';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
    // メール送信用の文章を取得
    const QiitaText = getQiitaTrend()
    const ZennText  = getZennTrend()
    
    const mailBodyText = await QiitaText + await ZennText

    // メール送信処理
    return sendMail(mailBodyText)
}
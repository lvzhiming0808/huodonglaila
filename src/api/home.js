/*
 * @Author: 罗圈圈
 * @Date: 2018-05-19 23:12:18
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-05-29 11:26:09
 */

 import { request, baseUrl, kanjiaUrl } from '@/utils'
 export const bannerList = async opts => await request({ ...opts }, `${baseUrl}/banner`)
 export const activeList = async opts => await request({ ...opts }, `${baseUrl}/active`)
 // 砍价主页banner
 export const banner = async opts => await request({ ...opts }, `${kanjiaUrl}/res/indexBanners`)
 // 砍价主页List
 export const kanjia = async opts => await request({ ...opts }, `${kanjiaUrl}/res/activities`)
 // 砍价介绍页
 export const kanjiaDetail = async opts => await request({ ...opts }, `${kanjiaUrl}/res/activity`)
 // 发起砍价
 export const fqCutPrice = async opts => await request({ ...opts }, `${kanjiaUrl}/cutPrice/preConfirm`)
 // 砍价详情页
 export const xqCutPrice = async opts => await request({ ...opts }, `${kanjiaUrl}/cutPrice/confirm`)
 // 全部订单
 export const cutPriceList = async opts => await request({ ...opts }, `${kanjiaUrl}/cutPrice/list`)

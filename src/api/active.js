/*
 * @Author: 罗圈圈
 * @Date: 2018-05-20 11:39:19
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-05-29 11:26:28
 */

import { request, baseUrl } from '@/utils'
export const getActiveInfo = async opts => await request({ ...opts }, `${baseUrl}/active/${opts.activeId}`)

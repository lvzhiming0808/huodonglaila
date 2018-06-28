/*
 * @Author: 罗圈圈
 * @Date: 2018-05-20 13:08:17
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-05-24 10:43:45
 */
import { request, baseUrl } from '@/utils'
export const getCollageInfo = async opts => await request({ ...opts }, `${baseUrl}/collage/${opts.collageId}`)
export const getCollageList = async opts => await request({ ...opts }, `${baseUrl}/collage`)
export const startCollage = async opts => await request({
  method: 'PUT',
  ...opts
}, `${baseUrl}/collage/${opts.activeId}`)
export const joinCollage = async opts => await request({
  method: 'POST',
  ...opts
}, `${baseUrl}/collage/${opts.collageId}`)

/*
 * @Author: 罗圈圈
 * @Date: 2018-05-29 11:24:14
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-05-29 12:07:12
 */

import { requestNotLoading, baseUrl, kanjiaUrl } from '@/utils'
export const reportFormId = async opts => await requestNotLoading({
  method: 'PUT',
  ...opts
}, `${kanjiaUrl}/report/formId/${opts.formId}`)

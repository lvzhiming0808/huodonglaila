/*
 * @Author: 罗圈圈
 * @Date: 2018-05-20 16:53:26
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-05-20 17:18:08
 */
import { request, baseUrl } from '@/utils'
export const getCourseList = async opts => await request({ ...opts }, `${baseUrl}/course/${opts.courseId}`)
export const getLessonInfo = async opts => await request({ ...opts }, `${baseUrl}/lesson/${opts.lessonId}`)


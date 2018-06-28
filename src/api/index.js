/*
 * @Author: 罗圈圈
 * @Date: 2018-05-11 14:29:36
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-05-29 11:35:29
 */
// ==========  home  ===========================================================
export { bannerList, activeList, banner, kanjia, kanjiaDetail } from './home'

// ==========  active  =========================================================
export { getActiveInfo } from './active'

// ==========  collage  ========================================================
export {
  // 获取拼团信息
  getCollageInfo,
  // 开启拼团
  startCollage,
  // 加入拼团
  joinCollage,
  // 获取拼团列表(订单列表)
  getCollageList
} from './collage'

// ==========  course  =========================================================
export { getCourseList, getLessonInfo } from './course'

// ==========  report  =========================================================
export { reportFormId } from './report'

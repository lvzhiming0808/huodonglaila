import wepy from 'wepy'
import { logIn } from '@/utils'

export default class CheckSession extends wepy.mixin {
  checkSession() {
    return new Promise((resolve) => {
      wx.checkSession({
        success() {
          resolve()
        },
        async fail() {
          await logIn()
          resolve()
        }
      })
    })
  }
}

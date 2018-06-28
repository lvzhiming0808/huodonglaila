import wepy from 'wepy'

export default class GetPhoneNumber extends wepy.mixin {
  async getPhoneNumber(info) {
    const {
      detail: { errMsg, encryptedData, iv }
    } = info
    return new Promise((resolve, reject) => {
      if (errMsg !== 'getPhoneNumber:ok') {
        reject(Error('用户拒绝授权'))
      } else {
        resolve({ encryptedData, iv })
      }
    })
  }
}

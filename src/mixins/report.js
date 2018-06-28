import wepy from 'wepy'
import { reportFormId } from '@/api'

export default class CheckSession extends wepy.mixin {
  reportFormId(e) {
    const {
      detail: {
        formId
      }
    } = e
    return reportFormId({ formId })
  }
}

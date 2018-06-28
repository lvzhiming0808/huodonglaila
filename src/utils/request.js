import wepy from 'wepy'
import { Get, Set } from './db'
import {
    baseUrl,
    kanjiaUrl
} from './config'

// import interfaces from './interfaces'

export const requestNotLoading = async({
    method = 'GET',
    header = {},
    data = null
} = {}, url, silence = false) => {
    const response = await wepy.request({
        url,
        method,
        data: Object.assign({}, data),
        header: Object.assign({}, {
            Authorization: Get('token')
        }, header)
    })
}

export const request = async({
    method = 'GET',
    header = {},
    data = null
} = {}, url, silence = false) => {
    wepy.showLoading({
        title: '加载中',
        mask: true
    })
    const response = await wepy.request({
        url,
        method,
        data: Object.assign({}, data),
        header: Object.assign({}, {
            Authorization: Get('token')
        }, header)
    })
    wepy.hideLoading()
    if (response.statusCode === 200 || response.statusCode === 304) {
        return response.data
    } else if (response.statusCode === 401) {
        await logIn()
        return await request({ method, data }, url, silence)
    } else {
        wepy.showToast({
            title: '加载失败, 请稍后再试',
            icon: 'none'
        })
    }
}
export const logIn = async(fromOrderId = '', canUpdate = false, cb) => {
    const {
        code
    } = await wepy.login()
    const {
        token,
        needUpdate
    } = await request({
        method: 'put',
        data: {
            code,
            canUpdate,
            fromOrderId
        }
    }, `${kanjiaUrl}/user/login`)
    console.log(token)
    Set({ token })
    canUpdate && typeof cb === 'function' && cb(needUpdate)
    return Promise.resolve()
}
export const updateUserInfo = async(option, cb) => {
    let code
    const {
        iv,
        encryptedData
    } = option
    try {
        await wepy.checkSession()
    } catch (error) {
        code = await logIn()
    }
    try {
        await request({
            method: 'POST',
            data: {
                iv,
                encryptedData,
                code
            }
        }, `${kanjiaUrl}/user`)

        typeof cb === 'function' && cb(false)
        return Promise.resolve()
    } catch (error) {
        return Promise.reject(error)
    }
}
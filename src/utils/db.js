import wepy from 'wepy'
let prefix = 'mini.dev.'
if (process.env.NODE_ENV === 'prod') {
  prefix = 'mini.prod.'
}

// Set({name: "quanquan"})
export const Set = (data) => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      wepy.setStorageSync(prefix + key, data[key])
    }
  }
}

export const Get = (key) => {
  return wepy.getStorageSync(prefix + key)
}

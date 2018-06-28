export const sleep = (wait = 1e3) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, wait)
})

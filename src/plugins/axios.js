import axios from 'axios'
import configApi from './config-api'

axios.interceptors.response.use(
  function (response) {
    return response
    // console.log('返回', response)
  },
  function (err) {
    if (err.response.status === 401) {
      const redirectUri = encodeURIComponent(window.location.href)
      const appid = 'wx38882bf91bb99d36'
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
    } else {
      return Promise.reject(err.response)
    }
    // console.log('返回error', error, window.location)
  }
)

export default {
  get (url, options) {
    const key = JSON.stringify({ ...options, url })
    if (configApi.cached && configApi.cached.has(key)) {
      console.log(`使用api缓存${key}`) // eslint-disable-line
      return Promise.resolve(configApi.cached.get(key))
    }
    return axios.get(url, options).then(res => {
      if (configApi.cached) configApi.cached.set(key, res)
      return res
    })
  },
  post: axios.post
}

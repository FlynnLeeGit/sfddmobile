import axios from 'axios'

axios.interceptors.response.use(function (response) {
  return response
  // console.log('返回', response)
}, function (error) {
  const redirectUri = encodeURIComponent(window.location.href)
  const appid = 'wx38882bf91bb99d36'
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  return Promise.reject(error)
  // console.log('返回error', error, window.location)
})

export default axios

import { apiLog } from './apiLog'
import { BASE_URL, WECHATAUTHURL, WECHATAUTHSUFFIX, WECHATAUTHPAGE } from './consts'

/**
 * 对异步数据code处理
 * @author thunder king star <332793511@qq.com>
 */
const handleCallback = {
  /**
   * 默认处理
   * http://drupal.leiwangxing.com/api/ajax/demo/api1 全体用户都可以访问，返回数据
   * http://drupal.leiwangxing.com/api/ajax/demo/api2 仅登录用户可以访问，非登录用户返回401
   * http://drupal.leiwangxing.com/api/ajax/demo/api3 所有都无权访问，非登录用户返回401，已登录用户返回403
   * http://drupal.leiwangxing.com/api/ajax/demo/api4 仅admin访问，非登录用户返回401，已登录用户返回403
   * http://drupal.leiwangxing.com/api/ajax/demo/api5 重定向
   * http://drupal.leiwangxing.com/api/ajax/demo/api6 永久重定向
   * http://drupal.leiwangxing.com/api/ajax/demo/api7 503，服务器错
   * http://drupal.leiwangxing.com/api/ajax/demo/api8 400，一般
   * http://drupal.leiwangxing.com/api/ajax/demo/api9 405，无此方法
   * http://drupal.leiwangxing.com/api/lakjdsflaksjfdlajdsflk 404，无此接口
   */
  handleApi (options) {
    const res = options.response
    if (res.status === 200) {
      const data = res.data
      const status = data.status
      if (status === 200 || status === 210) {
        options.callback(data)
      } else if (status === 401) {
        if (options.notLogin) {
          options.notLogin(data)
        } else {
          options.context.redirect('/app/user/login')
        }
      } else if (status === 402) {
        if (data.data.type === 'wxauth') {
          const red = encodeURIComponent(`${BASE_URL}${WECHATAUTHPAGE}?red=${options.callbackPage}`)
          if (options.context.isServer) {
            options.context.redirect(getWechatAuthUrl(red))
          } else {
            window.location.replace(getWechatAuthUrl(red))
          }
        }
      } else if (status === 403) {
        options.context.redirect('/app/403')
      } else if (status === 300) {
        if (/^\//.test(data.data.url) || options.context.isServer) {
          options.context.redirect(data.data.url)
        } else {
          window.location.href = data.data.url
        }
      } else if (needFriendlyCode()) {
        apiLog({ message: data.message })
        options.context.redirect(`/app/errorlog?msg=${encodeURIComponent(data.message)}`)
      }
    } else {
      options.context.redirect('/app/404')
    }
  },
  handleAjax (options) {
    const res = options.response
    if (res.status === 200) {
      const data = res.data
      const status = data.status
      if (status === 200 || status === 210) {
        options.callback(data)
      } else if (status === 401) {
        if (options.notLogin) {
          options.notLogin(data)
        } else {
          options.router.push('/app/user/login')
        }
      } else if (status === 402) {
        if (data.data.type === 'wxauth') {
          const red = encodeURIComponent(`${BASE_URL}${WECHATAUTHPAGE}?red=${options.callbackPage}`)
          window.location.replace(getWechatAuthUrl(red))
        }
      } else if (status === 403) {
        options.router.push('/app/403')
      } else if (status === 300) {
        if (/^\//.test(data.data.url)) {
          options.router.push(data.data.url)
        } else {
          window.location.href = data.data.url
        }
      } else if (needFriendlyCode()) {
        apiLog({ message: data.message })
        options.router.push(`/app/errorlog?msg=${encodeURIComponent(data.message)}`)
      }
    } else {
      options.router.push('/app/404')
    }
  }
}

const getWechatAuthUrl = redirect => `${WECHATAUTHURL}&redirect_uri=${redirect}${WECHATAUTHSUFFIX}`
const needFriendlyCode = code => code === 310 || code === 400 || code === 404 || code === 405 || code === 406 || code === 410 || code === 422 || code === 503

export const handleApi = handleCallback.handleApi

export const handleAjax = handleCallback.handleAjax

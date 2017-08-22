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
    const data = res.data
    if (res.status === 200) {
      switch (data.status) {
        case 200:
          options.callback(data)
          break
        case 210:
          options.callback(data)
          break
        case 300:
          if (/^\//.test(data.data.url)) {
            options.context.redirect(data.data.url)
          } else if (!options.context.isServer) {
            window.location.href = data.data.url
          } else {
            apiLog({ message: '服务端暂时不知道怎么重定向，需要研究一下' })
          }
          break
        case 310:
          // 接口换了 或 已不存在
          // 调用写日志方法把日志写到node服务器
          apiLog({ oldUrl: data.old_url, url: data.url })
          options.context.redirect('/app/errorlog')
          break
        case 401:
          // options.context.store.commit('SET_USER', '301')
          if (options.notLogin) {
            options.notLogin(data)
          } else {
            options.context.redirect('/app/user/login')
          }
          break
        case 402:
          if (data.data.type === 'wxauth') {
            const red = encodeURIComponent(`${BASE_URL}${WECHATAUTHPAGE}?red=${options.callbackPage}`)
            // options.callbackPage
            if (options.context.isServer) {
              options.context.redirect(getWechatAuthUrl(red))
            } else {
              window.location.href = getWechatAuthUrl(red)
            }
          }
          break
        case 403:
          // options.context.store.commit('SET_USER', '301')
          if (options.context.isServer) {
            options.context.redirect('/app/403')
          } else if (options.context.toast) {
            options.context.toast({
              message: '无权访问',
              position: 'center',
              duration: 1000
            })
          } else {
            options.context.redirect('/app/403')
          }
          break
        case 400:
          // 处理返回的data.message
          apiLog({ message: data.message })
          options.context.store.commit('SETERRORMESSAGE', data.message)
          options.context.redirect('/app/errorlog')
          break
        case 404:
          // 处理返回的data.message
          apiLog({ message: data.message })
          options.context.store.commit('SETERRORMESSAGE', data.message)
          options.context.redirect('/app/errorlog')
          break
        case 405:
          // 处理返回的data.message
          apiLog({ message: data.message })
          options.context.store.commit('SETERRORMESSAGE', data.message)
          options.context.redirect('/app/errorlog')
          break
        case 406:
          // 处理返回的data.message
          apiLog({ message: data.message })
          options.context.store.commit('SETERRORMESSAGE', data.message)
          options.context.redirect('/app/errorlog')
          break
        case 410:
          // 处理返回的data.message
          apiLog({ message: data.message })
          options.context.store.commit('SETERRORMESSAGE', data.message)
          options.context.redirect('/app/errorlog')
          break
        case 422:
          // 处理返回的data.message
          apiLog({ message: data.message })
          options.context.store.commit('SETERRORMESSAGE', data.message)
          options.context.redirect('/app/errorlog')
          break
        case 503:
          // 处理返回的data.message
          apiLog({ message: data.message })
          options.context.store.commit('SETERRORMESSAGE', data.message)
          options.context.redirect('/app/errorlog')
          break

        default:
          options.callback(data)
      }
    } else {
      options.context.redirect('/app/404')
    }
  },
  handleAjax () {

  }
}

const getWechatAuthUrl = redirect => `${WECHATAUTHURL}&redirect_uri=${redirect}${WECHATAUTHSUFFIX}`

export const handleApi = handleCallback.handleApi

export const handleAjax = handleCallback.handleAjax

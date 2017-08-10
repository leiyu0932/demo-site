/**
 * 对异步数据code处理
 * @author thunder king star <332793511@qq.com>
 */
const handleCallback = {
  /**
   * 默认处理
   */
  handle (options) {
    const res = options.response
    const data = res.data
    if (res.status === 200) {
      switch (data.status) {
        case 200:
          options.callback(data)
          break
        case 300:
          options.context.redirect(data.url)
          break
        case 301:
          // options.context.store.commit('SET_USER', '301')
          if (options.notLogin) {
            options.notLogin(data)
          } else {
            options.context.redirect('/app/login')
          }
          break
        case 310:
          // 接口换了 或 已不存在
          // 调用写日志方法把日志写到node服务器
          options.context.redirect('/app/310')
          break
        case 400:
          // 处理返回的data.message
          options.context['errorMessage'] = data.message
          break
        default:
          options.callback(data)
      }
    } else {
      options.context.redirect('/app/404')
    }
  }
}

export const handle = handleCallback.handle

// import router from './router'
// import store from './store'
// import {
//   Message
// } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// import {
//   getToken,
//   getRole
// } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

// NProgress.configure({
//   showSpinner: false
// }) // NProgress Configuration

// const whiteList = ['/login'] // no redirect whitelist

// router.beforeEach(async (to, from, next) => {
//   console.log(router.options.routes);
//   // start progress bar
//   NProgress.start()

//   // set page title
//   document.title = getPageTitle(to.meta.title)

//   // determine whether the user has logged in
//   const hasToken = getToken()
//   // console.log(getRole());
//   //从后台获取的用户角色
//   // const role = 'user'

//   if (hasToken) {
//     if (to.path === '/login') {
//       // if is logged in, redirect to the home page
//       next({
//         path: '/'
//       })
//       NProgress.done()
//     } else {
//       // 从vuex中获取权限
//       const hasRoles = store.getters.roles && store.getters.roles.length > 0
//       if (hasRoles) {
//         const roles = JSON.parse(getRole())
//         console.log(roles,'roles');
//         await store.dispatch('permission/generateRoutes', roles).then(res => {
//           router.addRoutes(res)
//           router.options.routes = store.getters.routes
//           next()
//         })
//         // const accessRoute = await store.dispatch('permission/generateRoutes', roles)
//         // let constantRouters = router.options.routes
//         // constantRouters = constantRouters.concat(accessRoute)
//         // router.addRoutes(accessRoute)
//         // router.options.routes = constantRouters
//       } else {
//         if (whiteList.indexOf(to.path) !== -1) {
//           // in the free login whitelist, go directly
//           next()
//         } else {
//           // other pages that do not have permission to access are redirected to the login page.
//           next(`/login?redirect=${to.path}`)
//           NProgress.done()
//         }
//       }
//     }
//   } else {
//     /* has no token*/

//     if (whiteList.indexOf(to.path) !== -1) {
//       // in the free login whitelist, go directly
//       next()
//     } else {
//       // other pages that do not have permission to access are redirected to the login page.
//       next(`/login?redirect=${to.path}`)
//       NProgress.done()
//     }
//     // next()
//   }
//   // const hasRoles = store.getters.roles && store.getters.roles.length > 0
//   // if (hasRoles) {
//   //   const roles = store.getters.roles
//   //   const accessRoute = await store.dispatch('permission/generateRoutes', roles)

//   //   // dynamically add accessible routes
//   //   // 挂载动态路由，添加到路由

//   //   let constantRouters = router.options.routes
//   //   // if (constantRouters.length > accessRoute.length) {
//   //   //   for (let i = 0; i < constantRouters.length; i++) {
//   //   //     if (constantRouters.includes(accessRoute)[i] == -1) {
//   //   //       constantRouters = constantRouters.concat(accessRoute)
//   //   //     }
//   //   //   }
//   //   // } else {
//   //   //   for (let i = 0; i < accessRoute.length; i++) {
//   //   //     if (constantRouters.includes(accessRoute)[i] == -1) {
//   //   //       constantRouters = constantRouters.concat(accessRoute)
//   //   //     }
//   //   //   }
//   //   // }
//   //   constantRouters = constantRouters.concat(accessRoute)
//   //   router.addRoutes(accessRoute)
//   //   router.options.routes = constantRouters
//   //   next()
//   // } else {
//   //   try {
//   //     // get user info
//   //     // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
//   //     // 派发user/getInfo action, 获取当前用户的角色信息
//   //     // roles 必须是一个数组
//   //     // 获取用户的权限信息 存到vuex里面
//   //     const {
//   //       roles
//   //     } = await store.dispatch('user/getInfo')

//   //     // generate accessible routes map based on roles
//   //     //根据用户的角色信息，派发到permission/generateRoutes action. 生成动态路由表
//   //     const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

//   //     // dynamically add accessible routes
//   //     // 挂载动态路由，添加到路由
//   //     router.addRoutes(accessRoutes)

//   //     // hack method to ensure that addRoutes is complete
//   //     // set the replace: true, so the navigation will not leave a history record
//   //     next({
//   //       ...to,
//   //       replace: true
//   //     })
//   //   } catch (error) {
//   //     // remove token and go to login page to re-login
//   //     // 清空token
//   //     await store.dispatch('user/resetToken')
//   //     Message.error(error || 'Has Error')
//   //     //跳转登录
//   //     next(`/login?redirect=${to.path}`)
//   //     NProgress.done()
//   //   }
//   // }

// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })


import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // 是否有转圈效果

const whiteList = ['/login'] // 没有重定向的白名单

router.beforeEach(async (to, from, next) => {
  // 开始进度条
  NProgress.start()

  // 设置页面标题
  document.title = getPageTitle(to.meta.title)

  // 确定页面是否已登录
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 如果已登录，则重定向到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      // 获取到的静态路由 + 动态动态，如果选择的方案是不使用init，则不要注释此条，把下面的a注释掉
      // const hasGetPermissionRoutes = store.getters.permission_routes && store.getters.permission_routes.length > 0
      // 判断是否第一次登陆
      const a = store.getters.init
      if (a) {
        next()
      } else {
        try {
          // const roles = store.state.user.role，原文档写法，但是这样的话 会导致刷新后，数据丢失
          const role = JSON.parse(localStorage.getItem('roles'))
          const accessRoutes = await store.dispatch('permission/generateRoutes', role)
          await store.dispatch('user/changeInit')
          router.addRoutes(accessRoutes)
		
		// 在这里动态添加最后的通配路由，确保先有动态路由，再有通配路由，解决动态路由刷新会跳转到404问题
          // let lastRou = [{ path: '*', redirect: '/404' }]
          // router.addRoutes(lastRou)

          next({ ...to, replace: true })
        } catch (error) {
          // 删除令牌并进入登录页面重新登录
          await store.dispatch('user/resetToken')
          // Message.error(error || 'Has Error')
          Message({
            type:'error',
            message: error || "出现错误，请稍后再试"
          })
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})


import request from '@/utils/request'
//管理员登录
export function adminLogin(params) {
  return request({
    url: '/WebC/api/AdminLogin',
    method: 'get',
    params
  })
}

//APP登录
export function login(params) {
  return request({
    url: '/WebC/api/Login',
    method: 'get',
    params
  })
}

export function getInfo(params) {
  return request({
    url: '/WebC/api/Profile',
    method: 'get',
    params
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

// 登录效验
export function suanLogin() {
  return request({
    url: '/im/suan_login',
    method: 'post'
  })
}

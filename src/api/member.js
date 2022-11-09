import request from '@/utils/request'

//  会员
export function getMemberList(params) {
  return request({
    url: '/WebC/api/User',
    method: 'get',
    params
  })
}

// 上下分  
//  会员
export function downlineTopupTxn(params) {
  return request({
    url: '/WebC/api/TopupTxn',
    method: 'get',
    params
  })
}
//   信用额度明细
export function creditTxn(params) {
  return request({
    url: '/WebC/api/CreditTxn',
    method: 'get',
    params
  })
}

// 下线星期列表
export function getDrlWeek(params) {
  return request({
    url: '/WebC/api/DrlWeek',
    method: 'get',
    params
  })
}

// 用户类型列表
export function getDrlMemberType(params) {
  return request({
    url: '/WebC/api/DrlMemberType',
    method: 'get',
    params
  })
}

// 用户等级列表
export function getDrlAgentLevela(params) {
  return request({
    url: '/WebC/api/DrlAgentLevel',
    method: 'get',
    params
  })
}

// 高级会员总结
export function getAdminAgentSum(params) {
  return request({
    url: '/WebC/api/GetAdminAgentSum',
    method: 'get',
    params
  })
}

// 下线代理总结 - 会员总结
export function getDetAgentPlayerSum(params) {
  return request({
    url: '/WebC/api/GetAgentPlayerSum',
    method: 'get',
    params
  })
}

// 下线代理总结 - 代理总结
export function getDetAgentSum(params) {
  return request({
    url: '/WebC/api/GetAgentSum',
    method: 'get',
    params
  })
}

// 游戏下拉列表
export function getDrlGame(params) {
  return request({
    url: '/WebC/api/DrlGame',
    method: 'get',
    params
  })
}

// 牛牛游戏总结
export function getGameTxnSum(params) {
  return request({
    url: '/WebC/api/GetGameTxnSum',
    method: 'get',
    params
  })
}

// 游戏明细
export function getMemberTxn(params) {
  return request({
    url: '/WebC/api/GetMemberTxn',
    method: 'get',
    params
  })
}

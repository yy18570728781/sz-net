import request from '@/utils/request'

export function getInfo() {
  return request({
    url: '/WebC/api/Profile',
    method: 'get',
  })
}

// 下线
export function getDownline() {
  return request({
    url: '/WebC/api/Downline',
    method: 'get',
  })
}
// 编辑下线佣金   
export function updateRebate(data) {
  return request({
    url: '/WebC/api/UpdateRebate',
    method: 'post',
    data
  })
}

// 上下分明细
export function downlineTopupTxn(params) {
  return request({
    url: '/WebC/api/TopupTxn',
    method: 'get',
    params
  })
}

// 信用额度明细
export function downlineCreditTxn(params) {
  return request({
    url: '/WebC/api/DownlineCreditTxn',
    method: 'get',
    params
  })
}
// 当前信用额度
export function getCreditLimit(params) {
  return request({
    url: '/WebC/api/GetCreditLimit',
    method: 'get',
    params
  })
}

// 上分    
export function topupPoint(data) {
  return request({
    url: '/WebC/api/TopupPoint',
    method: 'post',
    data
  })
}

// 下分
export function withdrawPoint(data) {
  return request({
    url: '/WebC/api/WithdrawPoint',
    method: 'post',
    data
  })
}


// 加信用额度    
export function addCredit(data) {
  return request({
    url: '/WebC/api/AddCredit',
    method: 'post',
    data
  })
}

// 减信用额度
export function minusCredit(data) {
  return request({
    url: '/WebC/api/MinusCredit',
    method: 'post',
    data
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

// 下线代理总结
export function getAgentSum(params) {
  return request({
    url: '/WebC/api/GetAgentSum',
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

// 下线会员总结
export function getWindingMember(params) {
  return request({
    url: '/WebC/api/GetAgentPlayerSum',
    method: 'get',
    params
  })
}

// 下线会员总结明细
export function getWindingMemberDetail(params) {
  return request({
    url: '/WebC/api/GetMemberTxn',
    method: 'get',
    params
  })
}

// 主页
export function getAgentProfit(params) {
  return request({
    url: '/WebC/api/GetAgentProfit',
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


// 会员总结
export function getMemberProfit(params) {
  return request({
    url: '/WebC/api/GetAdminPlayerSum',
    method: 'get',
    params
  })
}

// 下线会员总结明细 游戏2
export function getMemberTxnFB(params) {
  return request({
    url: '/WebC/api/GetMemberTxnFB',
    method: 'get',
    params
  })
}

// 下线会员总结明细 积分转移
export function getMemberTransferTxn(params) {
  return request({
    url: '/WebC/api/GetMemberTransferTxn',
    method: 'get',
    params
  })
}

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

// 游戏总结
export function getGameTxnSum(params) {
  return request({
    url: '/WebC/api/GetGameTxnSum',
    method: 'get',
    params
  })
}


// 游戏明细
export function getGameTxn(params) {
  return request({
    url: '/WebC/api/GetGameTxn',
    method: 'get',
    params
  })
}

// 积分转移明细-游戏下拉
export function getTransferGame(params) {
  return request({
    url: '/WebC/api/DrlPointTransferGame',
    method: 'get',
    params
  })
}
// 积分转移明细
export function getTransferTxn(params) {
  return request({
    url: '/WebC/api/TransferTxn',
    method: 'get',
    params
  })
}
// 公司利润
export function getCompanyAccount(params) {
  return request({
    url: '/WebC/api/GetCompanyAccount',
    method: 'get',
    params
  })
}
// 获取分桶额
export function getCompanyProfitAmount(params) {
  return request({
    url: '/WebC/api/GetCompanyProfitAmount',
    method: 'get',
    params
  })
}

// 修改分桶额
export function addCompanyProfit(data) {
  return request({
    url: '/WebC/api/AddCompanyProfit',
    method: 'post',
    data
  })
}


// 获取奖励下拉列表
export function getDrlBonus(params) {
  return request({
    url: '/WebC/api/DrlBonus',
    method: 'get',
    params
  })
}

// 获取奖励列表
export function getBonusContent(params) {
  return request({
    url: '/WebC/api/GetBonusContent',
    method: 'get',
    params
  })
}

// 获取公司费用列表
export function getCompanyExpenses(params) {
  return request({
    url: '/WebC/api/GetCompanyExpenses',
    method: 'get',
    params
  })
}

// 添加公司费用
export function addCompanyExpenses(data) {
  return request({
    url: '/WebC/api/AddCompanyExpenses',
    method: 'post',
    data
  })
}

// 删除公司费用
export function deleteCompanyExpenses(data) {
  return request({
    url: '/WebC/api/DeleteCompanyExpenses',
    method: 'post',
    data
  })
}

// 修改密码
export function UpdatePassword(data) {
  return request({
    url: '/WebC/api/UpdatePassword',
    method: 'post',
    data
  })
}
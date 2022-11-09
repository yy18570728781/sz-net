import request from '@/utils/request'

// 高级会员
// 列表
export function getList() {
  return request({
    url: '/WebC/api/Senior',
    method: 'get',
  })
}
// 编辑
export function UpdateSeniorRebate(data) {
  return request({
    url: '/WebC/api/UpdateSeniorRebate',
    method: 'post',
    data
  })
}
// 加信用
export function addSeniorCredit(data) {
  return request({
    url: '/WebC/api/AddSeniorCredit',
    method: 'post',
    data
  })
}
// 减信用
export function minusSeniorCredit(data) {
  return request({
    url: '/WebC/api/MinusSeniorCredit',
    method: 'post',
    data
  })
}

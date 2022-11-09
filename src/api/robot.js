import request from '@/utils/request'


//  机器人列表
export function getRobot() {
  return request({
    url: '/WebC/api/Robot',
    method: 'get',
  })
}

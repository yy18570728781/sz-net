// const getters = {
//   sidebar: state => state.app.sidebar,
//   device: state => state.app.device,
//   token: state => state.user.token,
//   avatar: state => state.user.avatar,
//   name: state => state.user.name,
//   roles: state => state.user.roles,
//   routes: state => state.permission.routes,
//   permission_routes: state => state.permission.routes,
// }
// export default getters

const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  account: state => state.user.account,
  name: state => state.user.name,
  role: state => state.user.role, //加上这个
  permission_routes: state => state.permission.routes, //别漏了这个哦
  init: state => state.user.init //加上这个
}
export default getters

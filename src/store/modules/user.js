import {adminLogin,login,logout,suanLogin} from '@/api/login'
import {getToken,setToken,removeToken,getRole,setRole} from '@/utils/auth'
import { resetRouter} from '@/router'
import axios from 'axios'
import { MessageBox,Message} from 'element-ui'

const getDefaultState = () => {
  return {
    token: getToken(), //token
    role: [],  //角色列表
    init: false  //这个是解决后面‘切换用户，左侧路由菜单不变，要刷新一下才可以’的问题，如果在退出时刷新了，就不用写这个
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLE: (state, role) => {
    state.role = role;
  },
  // 判断是否初次登陆，在src/permission.js用到init
  SET_INIT: (state, data) => {
    state.init = data
  },
};

const actions = {
//初次登陆赋予init为true
  changeInit ({ commit }) {
    commit("SET_INIT", true);
  },
  // 账号密码登录
  login ({ commit }, userInfo) {
    const menulist = []
    const { userCode,password,prefix } = userInfo
    let mobile =userCode
    adminLogin({userCode,pwd:password}).then(adminRes=>{
      console.log(adminRes);
      if(adminRes.message == 'success' && !adminRes.data.status){
        const {role,token,userName} = adminRes.data
        localStorage.setItem('userInfo', JSON.stringify(adminRes.data)) // 将用户角色存储在本地
        let roles = [role]
        localStorage.setItem('roles', JSON.stringify(roles)) // 将用户角色存储在本地
        commit("SET_ROLE", roles);
        setToken(token);
        location.reload()
      }else{

        axios({
          method: 'post',
          // url: 'http://8.134.95.28:81/im/suan_login',
          url: 'https://api.newsclub666.com/admin/suan_login',
          // url: 'https://api.newsclub666.com/im/suan_login',

          data: {mobile,password,prefix}
          // params: {/*GET数据*/}
        }).then(res=>{ 
          console.log(res,'用户信息');
          const {data} = res

          if(data.code == 0){
            const userWalletUuid = data.data.wallet_uuid
            localStorage.setItem('userWalletUuid', JSON.stringify(userWalletUuid)) // 将用户钱包ID存储在本地

            return new Promise((resolve, reject) => {
              login({walletUuid:userWalletUuid}).then(response => {
                console.log(response);
                if(response.data.status == 'Failed'){
                  // console.log('登录错');
                  Message({
                    type:'error',
                    message:'The account or password is incorrect. Please confirm and re-enter it'
                  })
                  return
                }

                console.log(response,'login-response')
                const {role,token,userName} = response.data
                localStorage.setItem('userInfo', JSON.stringify(response.data)) // 将用户角色存储在本地
                let roles = [role]
                localStorage.setItem('roles', JSON.stringify(roles)) // 将用户角色存储在本地
                commit("SET_ROLE", roles);
                setToken(token);
                resolve();
                location.reload()
                  
              })
            })
          }else{
            // console.log('校验');
            Message({
              type:'error',
              message:'The account or password is incorrect. Please confirm and re-enter it'
            })
          }
        })

      }
    })
  },

  // 退出登录
  logout ({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          // location.reload() //退出 刷新页面，如果写了这个就不用写init了，选用init 只是因为个人感觉比较优雅
          localStorage.removeItem('role')
          commit('SET_INIT', false)
          commit('SET_TOKEN', '');
          commit("SET_ROLE", '');
          removeToken(); // must remove  token  first
          // removeUser();
          commit("RESET_STATE");
          commit('SET_MENULIST', '');
          dispatch('tagsView/delAllViews', null, { root: true });
          resetRouter();
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      removeToken(); // must remove  token  first
      // removeUser();
      commit("RESET_STATE");
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};


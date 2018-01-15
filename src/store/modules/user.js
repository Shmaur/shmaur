import { loginByUsername, loginOut, getUserInfo } from '@/api/login.js'
import { getToken, setToken, removeToken } from '@/utils/auth.js'

//用户信息
const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    introduction: '',
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },


  actions: {
    //用户名登陆
    loginByUsername({ commit }, userInfo) {
      const username = userInfo.username.$.trim()
      return new Promise((resole, reject) => {
        loginByUsername(username, userInfo.psd).then(resp => {
          const data = resp.data
          commit('SET_TOKEN', data.token)
          setToken(resp.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
   // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    


    //登出
    loginOut({commit,state}){
    	return new Promise((resolve,reject)=>{
    		loginOut(state.token).then(()=>{
    			commit('SET_TOKEN','')
    			commit('SET_ROLES',[])
    			removeToken()
    			resolve()
    		}).catch(error=>{
    			reject(error)
    		})
    	})
    },

    //前端 登出
    FedLogout({commit}){
    	return new Promise(resole=>{
    		commit('SET_TOKEN','')
    		removeToken()
    		resole()
    	})
    },

    //动态修改权限

    ChangeRole({commit},role){
    	return new Promise(resole=>{
    		commit('SET_ROLES',data.role)
    		commit('SET_NAME',data.name)
    		commit('SET_AVATAR',data.avatar)
    		commit('SET_INTRODUCTION',data.introduction)
    		resole()
    	})
    }
}


export default user
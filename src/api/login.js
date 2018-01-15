import request from '@/utils/request'

export function loginByUsername(username, psd) {
  const date = {
    username,
    psd
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}


export function loginOut() {
  return request({
    url: '/login/loginOut',
    method: 'post'
  })
}

export function getUserInfo(key) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { key }
  })
}

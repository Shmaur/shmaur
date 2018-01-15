import Cookies from 'js-cookie'


// 保存与获取token

const Tokenkey = 'shmaur-Token'

export function getToken(){
	return Cookies.get(Tokenkey)
}

export function setToken(){
	return Cookies.set(Tokenkey,token) 
}

export function removeToken(){
	return Cookies.remove(Tokenkey)
}
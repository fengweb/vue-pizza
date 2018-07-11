import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
      //设置属性
      menuItems:{}, //菜单数据

      currentUser:null, //登录信息（头部显示的email）

      isLogin:false //是否是登录状态
	},
	getters:{
	  //获取属性状态
      getMenuItems: state => state.menuItems, //获取菜单数据
 
      getCurrentUser: state => state.currentUser, //获取用户信息

      getIsLogin: state => state.isLogin //获取用户登录状态
	},
	mutations:{
	  //改变属性状态

	  setMenuItems(state,data){
         state.menuItems = data
	  }, //修改菜单数据

	  removeMenuItems(state,data){
         state.menuItems.forEach((item,index) => {
            if(item == data){
               state.menuItems.splice(index,1)
            }
         })
	  },//修改删除菜单数据

	  
	  pushToMenuItems(state,data){
          state.menuItems.push(data)
	  },//将新添加的数据push到menuItems中
      

	  // userStatus(state,user){
	  // 	if(user){
	  // 		state.currentUser = user
	  // 		state.isLogin = true
	  // 	}else{
	  // 		state.currentUser = null
	  // 		state.isLogin = false
	  // 	}
	  // },//修改用户登录信息及状态


	  setUser(state,data){
	  	if(data){
	  		state.currentUser = data
	  		state.isLogin = true
	  	}else{
	  		state.currentUser = null
	  		state.isLogin = false
	  	}
	  }

	},
	actions:{
	  //应用mutations

	  // setUser({commit},user){
   //        commit('userStatus',user)
	  // }
	}
})
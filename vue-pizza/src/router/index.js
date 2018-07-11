import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import About from '../components/about/About'
import Login from '../components/Login'
import Register from '../components/Register'

 // 二级路由
import contact from '../components/about/Contact'
import delivery from '../components/about/Delivery'
import history from '../components/about/History'
import orederingguide from '../components/about/OrederingGuide'

// 三级路由
import phone from '../components/about/contact/phone'
import personname from '../components/about/contact/personname'

Vue.use(Router)

 const routers = new Router({
  mode:"history",
  //base: '/dist/', //将vue部署到dist目录下
  
 
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
      	default:Home,
      	// 'orederingguide':OrederingGuide,
      	// 'delivery':Delivery,
      	// 'history':History
      }
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect:'/about/contact',
	      children:[
	        {
	          path:'/about/contact',
	          name:'contact',
	          component:contact,
            redirect:'/about/contact/phone',
	             children:[
                   {
                   	path:'/about/contact/phone',
                   	name:'phone',
                   	component:phone
                   },
                   {
                   	path:'/about/contact/personname',
                   	name:'personname',
                   	component:personname
                   }
	             ]
	        },
	        {
	          path:'/about/history',
	          name:'history',
	          component:history
	        },
	        {
	          path:'/about/delivery',
	          name:'delivery',
	          component:delivery
	        },
	        {
	          path:'/about/OrederingGuide',
	          name:'orederingguide',
	          component:orederingguide
	        },
	        {
	          path:'*',
	          redirect:'/'
	        }
	       
	      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})


//路由全局守卫 进入组件之前触发
// routers.beforeEach((to,from,next)=>{
//     if(to.path == "/login" || to.path == "/register"){
//         next()
//     }else{
//     	alert("请先登录！")
//     }
// })


//后置钩子  进入组件之后触发
// routers.afterEach((to,from)=>{
// 	alert('进入组件之后弹出！')
// })
export default  routers




















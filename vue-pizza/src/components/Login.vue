<template>
	<div class="row mr-3">
		<div class="col-md-12 col-lg-12">
			<div class='card'>
				 <div class="card">
				 	<div class="card-body">
				 		<img class="mx-auto d-block" src="../../src/assets/icon.png">
				 		<form @submit.prevent="onSubmit">
				            <div class="form-group">
				              <label for="email">邮箱</label>
				              <input 
				                type="email"
				                class="form-control"
				                v-model="email"
				                >
				            </div>
				            <div class="form-group">
				              <label for="password">密码</label>
				              <input 
				                type="password"
				                class="form-control"
				                v-model="password"
				                >
				            </div>
				           
				            <button type="submit" class="btn btn-block btn-success">登录</button>
				          </form>
				 	</div>
				 </div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
 import axios from 'axios'
	export default {
		data(){
			return{
				email:'',
				password:''

			}
			
		},

        //进入页面前清空登录信息
        beforeRouteEnter:(to,from,next)=>{
            next(vm => vm.$store.commit('setUser',null))
        },

		methods:{
				onSubmit(){
                      axios.get('/userinfo.json')
                           .then(res => {
                           	const data = res.data
                           	const users =[]
                           	console.log(data)
                           	for(let key in data ){
                           		const user = data[key]
                           		users.push(user)
                             }

                             console.log(users)
                             let result = users.filter( use =>{
                                  return this.email == use.email && this.password == use.password
                             })
                             if(result !=null && result.length>0){
                             	  //this.$store.dispatch('setUser',result[0].email)
                             	  this.$store.commit('setUser',result[0].email)
                                  this.$router.push({name:'Home'})
                             }else{
                             	alert('账号或密码错误！')
                             	  // this.$store.dispatch('setUser',null)
                             	  this.$store.commit('setUser',null)
                             }
                           })
				}
			}
	}
</script>












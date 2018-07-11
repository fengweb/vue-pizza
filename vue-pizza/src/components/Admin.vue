<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <newpizza ></newpizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody  v-for="(item,index) in getMenu" :key="index">
          <tr>
            <td>{{ item.name }}</td>
            <td>
              <button @click="deleteData(item,index)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script type="text/javascript">
 import axios from 'axios'
 import newpizza from './NewPizza'
	export default {
		components:{
					newpizza
				},
		data(){
			return{
				 //getMenu:[]
			}
		},
		created(){
           this.getmenus()
		},

    computed:{
      getMenu:{
              //在vuex中取数据

              get(){
                 return this.$store.state.menuItems
              },
              set(){

              }
              
      }
    },
		methods:{
			getmenus(){
              axios.get('/menu.json')
                   .then(res => {
                   	
                   	let menuarr=[]
                   	for(let m in res.data){
                   	   res.data[m].id=m
                       menuarr.push(res.data[m])
                   	}

                    this.$store.commit('setMenuItems',menuarr)
                   	//this.getMenu = menuarr
                   })
			},

			deleteData(item,index){
				axios.delete('/menu/'+item.id+"/.json")
				     .then(res => {
				     
				     	// this.$router.push({name:'Menu'})
              this.$store.commit('removeMenuItems',item)
				     })
				// fetch("https://wd6439404043srtpna.wilddogio.com/menu/"+item.id+"/.json",{
		  //         method:"DELETE",
		  //         headers:{
		  //           'Content-type':'application/json'
		  //         }
		  //       })
		  //       .then(res => res.json())
		  //       //.then(data => this.$router.push({name:"menuLink"}))
		  //       .catch(err => console.log(err))
			}
		}

		//进入组件之前触发
		// beforeRouteEnter:(to,from,next)=>{
  //           next(vm=>{
  //              alert(vm.name)

  //           })
		// }

		

		// 离开组件之前触发
  //       beforeRouteLeave(to,from,next){
  //          if(confirm('确定离开吗?')== true){
  //          	 next()
  //          }else{
  //          	 next(false)
  //          }
		// }
	}
</script>
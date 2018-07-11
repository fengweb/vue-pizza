<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>尺寸</th>
						<th>价格</th>
						<th>加入</th>
					</tr>
				</thead>
				<tbody v-for ="item in getMenuItems" :key="item.name">
					<tr>
						<td><strong>{{ item.name}}</strong></td>
					</tr>
					<tr v-for="option in item.options" :key="option.size">
						<td>{{ option.size }}</td>
						<td>{{ option.price }}</td>
						<td><button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
					</tr>
				</tbody>
			</table>

		</div>

		<div class="col-sm-12 col-md-4">
			<div v-if="baskets.length > 0">
				<table class="table">
				<thead class="thead-default">
					<tr>
						<th>数量</th>
						<th>品种</th>
						<th>价格</th>
					</tr>
				</thead>
				<tbody v-for="(item,index) in baskets" :key="index">
					<tr>
						<td>
							<button class="btn btn-sm" @click="decreasenum(item,index)">-</button>
							<span>{{ item.num }}</span>
							<button class="btn btn-sm" @click="addnum(item)">+</button>
						</td>
						<td>{{ item.name }}{{ item.size }}</td>
						<td>{{ item.price * item.num }}</td>
					</tr>
				</tbody>
			</table>
			<p>总价：{{ total+'人民币' }}</p>
			<button class="btn btn-success btn-block">提交</button>
			</div>

			<div v-else>
				{{ basketText }}
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from "axios"
	export default{
		data(){
		  return{
		  	 baskets:[],
		  	 basketText:"暂无商品",
		  	 //getMenuItems:{}
		  // 	 	1: {
				//   'name': '榴莲pizza',
				//   'description': '这是喜欢吃榴莲朋友的最佳选择',
				//   'options': [{
				//     'size': 9,
				//     'price': 38
				//   }, {
				//     'size': 12,
				//     'price': 48
				//   }]
				// },
				// 2: {
				//   'name': '芝士pizza',
				//   'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
				//   'options': [{
				//     'size': 9,
				//     'price': 38
				//   }, {
				//     'size': 12,
				//     'price': 48
				//   }]
				// },
				// 3: {
				//   'name': '夏威夷pizza',
				//   'description': '众多人的默认选择',
				//   'options': [{
				//     'size': 9,
				//     'price': 36
				//   }, {
				//     'size': 12,
				//     'price': 46
				//   }]
				// }
		  // 	 }
		  
		  }
	    },
	    created(){
           this.fetchDate()
        },
      
		computed:{
			getMenuItems(){
              //在vuex中取数据 一种方法
              //return this.$store.state.menuItems
             //在vuex中去数据  第二种方法
              return this.$store.getters.getMenuItems

			},
			total(){
				let totalnum = 0
			   // for(let i in this.baskets){
			   // 	totalnum += this.baskets[i].price * this.baskets[i].num
			   // }
               for(let i=0; i<  this.baskets.length; i++){
               	  totalnum += this.baskets[i].price * this.baskets[i].num
               	  
               }

      //          for(let i in this.baskets){
			   // 	let thisitem = this.baskets[i]
			   // 	totalnum = thisitem.price * thisitem.num
			   // }
               return totalnum
			}
		},
		methods:{

			fetchDate(){
               // axios.get('menu.json')
               //      .then(res => {
               //      	this.getMenuItems =res.data
               //       })


               //第二种方式：将请求到的数据存储到vuex中
               axios.get('menu.json')
                    .then(res => {
                    	this.$store.commit('setMenuItems',res.data)
                     })
			},

			addToBasket(item,option){  
               let basket = {
               	 name:item.name,
               	 size:option.size,
               	 price:option.price,
               	 num:1
               }

               if(this.baskets.length >0){
                let result = this.baskets.filter( basket => {
                	return basket.name === item.name && basket.price == option.price
                })
                console.log(result)
                   if(result !=null && result.length>0){
                   	
                    result[0].num++
                   
                   }else{
                    
                    this.baskets.push(basket)
                   }
                }else{
               	this.baskets.push(basket)
               }

			},
      
            decreasenum(item,index){
              item.num--
              if(item.num <= 0){
              	this.baskets.splice(index,1)
              }
             
            },
            addnum(item){
              item.num++
            }
		}
	}
</script>





















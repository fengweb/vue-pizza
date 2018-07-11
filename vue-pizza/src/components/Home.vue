<template>
	<div>
		 <button @click="goToMenu" class="btn btn-success">Lets order!</button>
		  <br>
	    
	         <div class="row">
	            <div class="col-sm-12 col-md-4">
	               <history></history>
	            </div>
	            <div class="col-sm-12 col-md-4">
	              <delivery></delivery>
	            </div>
	            <div class="col-sm-12 col-md-4">
	               <orederingguide></orederingguide>
	            </div>

	         </div>

	    
	</div>
</template>

<script type="text/javascript">
import delivery from '../components/about/Delivery';
import history from '../components/about/History';
import OrederingGuide from '../components/about/OrederingGuide';
	export default{
		components:{
		      history:history,
		      delivery:delivery,
		      orederingguide:OrederingGuide

      // "app-header":Header
        },
		 methods:{
		 	goToMenu(){
               // this.$router.replace('/menu')
               //this.$router.replace({name:'Menu'})
               this.$router.push({name:'Menu'})
		 	}
		 }
	}
</script>
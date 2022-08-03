<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <h1 v-show="isShow" class="come">你好啊! </h1>
    </div>
</template>

<script>
    export default{
        name: 'Test', 
        data(){
            return{
            	isShow:true
            }
        },
	}
</script>

<style scoped>


    h1{
    	background-color:orange;
    }
    
    .come{
    	animation:donghuaming 1s;
    }
    
    .go{ 
      /* 反转 */
    	animation:atguigu 1s reverse;
     
    }
    
    @keyframes donghuaming{
		from{
			transform:translateX(-100px);
		}
		
		to{
			transform:translateX(0px);
		}
	}
 </style>
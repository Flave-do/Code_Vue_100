<template>
    <button @click="getStudents">获取学生信息</button>
</template>


<script>
    import axios from 'axios'
    export default{
      name: 'App',
      methods:{
          getStudents(){
              //没有设置服务器先就这样意思意思
              axios.get('localhost:8080/api1/student').then( 
                response => {
                  console.log('求成功了', response.data)
                },
          
                error => {
                  console.log('求失',error.message)
                },
              )
          }
      }
    }
            
</script>
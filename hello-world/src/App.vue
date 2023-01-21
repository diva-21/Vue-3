<template>
  <div>
     <h1>Hi there, its watchers here</h1>
    <br>
    <h2>Range is (0 - 20)</h2>
    <h2>Count is {{count}}</h2>
    <button @click="count+=2">+</button>
    <button @click="count-=2">-</button>
  </div>
 
</template>

<script>

export default ({
  name:'App',
  data(){
    return {
      count:0,

    }
  },
  methods:{},
  computed:{},
  watch:{
    count(newValue,oldValue){
      // console.log(`new is ${newValue} old is ${oldValue}`);
      if(newValue>oldValue && newValue==16){
        
        alert(`You are at the limit ${newValue} ${oldValue}`)
      }
    }
  }
})
</script>

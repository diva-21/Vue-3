<template>
    <!-- <h3>Methods</h3>
    <h2>Hi cmomps</h2>
    <h3>addition is {{add(1,2,3)}}</h3>
    <h3>Multiply {{multiply(11)}}</h3>-->
    <h3>Event handling</h3>
    <h3>{{mul}}</h3> 
    <h2>{{multiply(9)}}</h2>
    <div>
      <button @:mouseover="mul=10,incr($event)">
        change number
      </button>
    </div>
    
    <!-- <div>
      <button @:click="count++">+</button>
      <h1>{{count}}</h1>
      <button @:click="count--">-</button>
    </div>
      -->
    <div>
      <button @:click="incr($event)">+</button>
      <h1>{{count}}</h1>
      <button @:click="dec">-</button>
    </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      mul:5,
      names:['hi','diva','world'],
      count:0
    }
  },
  methods:{
    add(a,b,c){
      return a+b+c;
    },
    multiply(n){
      return n*this.mul;
    },
    incr(event){
      this.count+=10;
      console.log(event);
    },
    dec(event){
      this.count-=10;
      console.log(event);
    }
  }
  
}
</script>
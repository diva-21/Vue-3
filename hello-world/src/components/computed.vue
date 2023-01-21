
<template>
    <div>
    <h2>Fullname computed {{ fullname }}</h2>
    <!-- calling a method to invoke method get and set -->
    <button @click="getchange()">change name</button>
    <!-- <h3>method - {{items.reduce((tt,cur)=>(tt+=cur.cost),0)}}</h3> -->
    <button @click="items.push({id:4,cost:500})">Add item</button>
    <h3>computed tot - {{tot}}</h3>
    <h3>method tot - {{ans()}}</h3>
    <!-- method is always invoked when ui is rendered,
    where as computed will only invoke if there is 
    a change in the cache change -->
    <!-- <input type="text" v-model.trim="con"> -->
    <template v-for="item in items" :key="item.id">
      <h2 v-if="item.cost>100">{{item.cost}}</h2>
    </template>
    <div v-for="obj in expense" :key="obj.id">
      <h2>{{obj.cost}}</h2>
      
    </div>
    </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      con:"",
      fname: "divakar",
      lname: "l",
      items:[
        {
          id:1,
          cost:100
        },
        {
          id:2,
          cost:200
        },
        {
          id:3,
          cost:300
        }
      ]
    }
  },
  methods:{
   ans(){
    //  console.log("hi from method");
      return this.items.reduce((tt,cur)=>(tt+=cur.cost),0)
   },
   getchange(){
    console.log("hi from method");
    this.fullname='chandra aditya'
   }
  },
  // computed properties are cached based on their reactive dependencies.
  //  A computed property will only re-evaluate when some of its reactive dependencies have changed. 
  //  This means as long as author.books has not changed, 
  //  multiple access to publishedBooksMessage will immediately 
  //  return the previously computed result without having to run the getter function again.
  computed: {
    fullname:{
      
      get(){
        console.log("hi from computed get");
        return `${this.fname} ${this.lname}`;},
      set(val){
        console.log("hi from computed set");
        const n=val.split(" ");
        this.fname=n[0];
        this.lname=n[1];
      }
      
    },
    tot(){
      // console.log("hi from computed");
      return this.items.reduce((tt,cur)=>(tt+=cur.cost),0)
    },
    expense(){
      return this.items.filter(i=>i.cost>100)
    }
    // arr_tot(){
    //   // this.arr.push(obj)
    //   return this.arr.reduce((tt,cur)=>(tt+=cur),0)
    // }
  },
};
</script>
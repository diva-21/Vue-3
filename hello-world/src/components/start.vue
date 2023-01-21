<template>
  <div>

  
<!-- mustache  -->
  <h1>Hello {{name}} , {{cs}}</h1>
  <!-- binders common syntax:
    v-prop:[,css_attribute]="middle_guy name"
    here middlegut name is the data key which corresponds its css value
  v-bind:id="id1"
  -->
  <!-- v text directive-->
  <h1 v-text="name"></h1>
  <!-- v html -->
  <h2 v-html = "html"></h2>
  <!--v bind used as id guy-->
  <h2 v-bind:id="hi">Heading</h2>
  <!-- disblig button using v-bind-->
  <button v-bind:disabled="dis"> Click here</button>
  <!-- v bind using attributes -->
  <h3 v-bind:class="cl">Underlined text</h3>
  <h3 v-bind:class="success">Success</h3>

  <!-- condtional rendering-->
  <h4 v-bind:class="isPromoted && 'promote'">Movie promoted </h4>
  <h3 v-bind:class="isSold?'sold':'new'">Sold out</h3>
  
  <!-- Binding grps of classes in arrays and objects-->

  <!-- BINDING CLASSES -->
  <!-- array of clasees -->
  <h2 v-bind:class="['new','promote']">New and promoted</h2>
  <!-- array of expression classes -->
  <!-- here boolean and 'class' inside the array -->
  <h2 v-bind:class="[isPromoted && 'promote',isSold?'sold':'new']">Condtional array</h2>

  <!-- object of class -->
  <!-- in object notation, we have key-val pairs
  where key=class name,
        value = boolean exp -->
  <h2 v-bind:class="{
    promote:isPromoted,
    sold:isSold
    }">Condtional object</h2>
  <h2 v-bind:class="{
    design:dis,
    promote:isPromoted
    }"> 
    condtional object 2 example
  </h2>

  <!-- BINDING CSS STYLES -->

  <!-- Inline styles -->
  <!-- can be done by objects
  where key=css atribute,and val is js data 
  -->

  <!-- make a note here, two word css attributes should be -->
   <!-- written as : 

    'font-size' or fontSize
   -->

   <h4 v-bind:style="{'font-size':'50px'}">CSS binding</h4>
  <h2 v-bind:style="{
    color:tell_col,
    fontSize:hd_size +'px',
    padding:'25px'
  }">Inline styles</h2>
  <h2
  v-bind:style="{
    'font-size':hd_size +'px',
    padding:'20px'
  }">
    hi font-size
  </h2>

  <h2 v-bind:style="head_style_obj">Using js object as css style binfing</h2>
  <!-- binding css styles using array of objs -->
  <div v-bind:style="[baseStyle,successStyle]">
    Success div
  </div>

  <div :style="[successStyle,baseStyle]">Shorthand for v-bind is ':'</div>

  <br><br><br>

  <h2 :style="head_style_obj">Condtionals</h2>

  <h3 v-if="num===0">Number is 0</h3>
  <h3 v-else-if="num>0">Number is pos</h3>
  <h3 v-else>Num is neg</h3>

  <h2>Group or div condtional</h2>
  <div v-if="check">
    <!-- condtional will be applied for the whole div -->
    <h2>Hi</h2>
    <h2>Diva</h2>
  </div>

  <h2>V-show demo</h2>
  <!-- v-if will show only if the condn is true and keeps it in dom tree
  where as 
  v-show, if the condtn is false, that node will be there in dom but HIDDEN -->
  <h2 v-show="!check">v-show not</h2>
  <h2 v-show="check">v-show</h2>

  <h2 :style="head_style_obj">List rendering in vue</h2>

  <h4 v-for="i in names" :key="i">{{ i }}</h4>
  <!-- array of objects -->
  <h3>array of objects</h3>
  <h4 v-for="(me,ind) in items" :key="me" > {{ me.message}} {{ind}}</h4>
  <!-- arry of arrays -->
  <h3>array of arrays</h3>
  <div v-for="obj in actors" :key="obj">
    <h3>{{obj.name}}</h3>
    <h4 v-for="i in obj.age" :key="i">{{i}}</h4>
  </div>
  <!-- for on object -->
  <h2>for on object</h2>
  <h3 v-for="(i,k,ind) in info" :key="i">val={{i}} , key={{k}} ,index={{ind}}</h3>
  <!-- condtional on list -->
  <template v-for="name in names" :key="name">
    <h2 v-if="name==='diva'">Hi {{name}}</h2>
    
  </template>
  <my-component/>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      actors:[
        {name:'diva',
        age:[1,2,4]},
        {name:'diva2',age:[2,33,443]},
        {name:'diva3',age:[3,4,5]},
      ],
      info:{
        name:"divakar",
        cs:"cse-a",
        marks:100
      },
      name:"divakar",
      cs:"cse-a",
      html:'<h1>Hi there </h1>',
      hi:"heading",
      dis:true,
      cl:"design",
      success:"yoo",
      isPromoted:true,
      isSold:true,
      tell_col:"orange",
      hd_size:50,
      head_style_obj:{
        color:'orange',
        fontSize:'50px',
        padding:'20px'
      },
      baseStyle:{
        fontSize:'30px',
        padding:'20px'
      },
      successStyle:{
        backgroundColor:'lightgreen',
        color:'green'
      },
      num:-1,
      check:true,
      names:['hi','diva','world']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.design{
  background: red;
  margin-top: 10px;
  font-weight: 20px;
  text-decoration: underline;
}
.promote{
  font-style: italic;
  font-weight: 10px;
  text-decoration: underline;
}
.new{
  color: aqua;
}
.sold{
  color: brown;
}
</style>

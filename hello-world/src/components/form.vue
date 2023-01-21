<template>
<div>
  <h1>Form</h1>
  <div>{{ JSON.stringify(formVal,null,2)}}</div>

  <!-- v-model used for two way binding in vue -->
  <!--.prevent === event.preventDefault()-->
  <form @:submit.prevent="formguy">
    <div>
      <label for="name">Name</label>
    <input type="text" id="name" v-model.trim.lazy="formVal.name"  />
    </div>

    <div>
      <label for="pro">Job prfiles</label>
      <textarea  id="pro" v-model.lazy="formVal.tarea"></textarea>
    </div>
    <div>
      <label for="country">Country</label>
      <select  id="country" v-model="formVal.con">
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
    </div>

     <div>
      <label for="loc">Locations</label>
      <select  id="loc" multiple v-model="formVal.loc">
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
    </div>

    <div>
      <label for="remote">Remote</label>
      <input type="checkbox" id="remote" v-model="formVal.remote" true-value="yes" false-value="no"/>
    </div>
    
    <div>
      <label for="skills" >Skills</label>
    <br>
    <input type="checkbox" id="html" v-model="formVal.skills" value="html">
    <label for="html" >HTML</label>

    <br>
    <input type="checkbox" id="css" v-model="formVal.skills" value="css">
    <label for="css" >CSS</label>
    </div>

    <!-- <div>
      <button>Submit</button>
    </div> -->

    
    <div>
      <label for="age">Age</label>
    <input @keyup.enter="formguy()" type="number" id="age" v-model.number="formVal.age"  />
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      formVal: {
        name: "",
        age:null,
        tarea: "",
        con:"",
        loc:[],
        remote:"no",
        skills:[]
      },
    };
  },
  methods:{
    formguy(){
      //should stop the page on submit refresh
      // event.preventDefault();
      console.log(this.formVal);
    }
  }
};
</script>

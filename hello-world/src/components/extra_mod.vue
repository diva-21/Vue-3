<template>
  <div>
    <!-- v-once enables to render the data only once   -->
    <h1 v-once>hi {{name}}</h1>
    <button @:click="name='cse'">clcik</button>

    <!-- v-pre prevents the data from rendering -->
    <h2 v-pre>{{name}}</h2>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name:'divak',
      c:0
    };
  },
};
</script>

<template>

<div>
  <h1>Hi from Components project</h1>
<Greet/>
</div>

</template>

<script>

import Greet from './components/Greet.vue'
export default {
  name: 'App',
  components:{
    Greet,
  }
  
}
</script>

<style>

</style>

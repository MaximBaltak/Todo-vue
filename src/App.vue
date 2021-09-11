<template>
<header class="header"><h1 class="title">TODO APP</h1></header>
<Controller/>
<ul class="tasks">
  <Task/>
  <Task/>
</ul>
</template>

<script>
import Controller from './components/Controller.vue'
import Task from './components/Task.vue'
export default {
  name: 'App',
  components: { Controller, Task }

}
</script>

<style lang="scss">
#app {
  font-family: Balsamiq Sans, cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
}
*{
  margin: 0;
  padding: 0;
}
.header{
  height: 80px;
  background: #FF7B7B;
  .title{
    padding-top: 20px;
    font-weight: bold;
    font-size: 30px;
    color: #fff;
  }
}
.tasks{
  list-style-type: none;
  padding: 0;
  margin: 108px auto;
  width: 400px;
}
</style>

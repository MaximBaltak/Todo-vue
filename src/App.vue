<template>
<header class="header"><h1 class="title">TODO APP</h1></header>
<Controller/>
<ul class="tasks">
  <Task v-for="task in tasks" :key="task.id" :id="task.id" :text="task.text"/>
</ul>
</template>

<script>
import Controller from './components/Controller.vue'
import Task from './components/Task.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: { Controller, Task },
  computed: mapState({
    tasks: state => state.todo.tasks
  })
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
  padding-left: 10px;
  margin: 108px auto;
  width: 400px;
  height: 400px;
  overflow-y: auto;

}
.tasks::-webkit-scrollbar {
  width: 5px;
}
.tasks::-webkit-scrollbar-track {

  background-color: white;
}
.tasks::-webkit-scrollbar-thumb {
  width:3px;
  background: linear-gradient( to top, rgb(0, 189, 139),rgb(3, 154, 255));
  border-radius: 20px
}

</style>

<template>
<header class="header"><h1 class="title">TODO APP</h1></header>
<transition appear name='control'>
<Controller/>
</transition>
<transition-group class="tasks" name="list" tag="ul">
  <Task v-for="task in tasks" :key="task.id" :id="task.id" :text="task.text"/>
</transition-group>
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
  min-height: 400px;

}

.control-enter-active{
  animation: show .6s;
}
.control-leave-active{
  animation: show .6s reverse;
}
.list-enter-active{
  animation: show-el-left .6s;
}
.list-leave-active{
   position: absolute;
  animation: show-el-right .6s;
}
.list-move {
  transition: transform .6s;
}

@keyframes show {
  0%{
    transform: translateY(-100px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes show-el-left {
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes show-el-right {
  0%{
    transform: translateX(0);
    opacity: 1;
  }
  100%{
    transform: translateX(100px);
    opacity: 0;
  }
}

</style>

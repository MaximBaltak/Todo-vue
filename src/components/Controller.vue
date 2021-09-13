<template>
    <div class="control">
        <label for="text">добавь задачу</label>
        <input v-model="text" @keypress="add" id="text"  type="text" class="text">
        <button class="clear" @click="clear">отчистить список</button>
    </div>
</template>

<script>
export default {
  name: 'Controller',
  computed: {
    text: {
      get () {
        return this.$store.state.todo.inputText
      },
      set (value) {
        this.$store.commit('inputChange', value)
      }
    }
  },
  methods: {
    add (e) {
      if (e.code === 'Enter') {
        this.$store.commit('add')
      }
    },
    clear () {
      this.$store.commit('clear')
    }
  }
}
</script>
<style lang="scss" scoped>
$color: #FF7B7B;
.control{
    min-width: 566px;
    margin: 156px auto;
    label{
        font-weight: normal;
        font-size: 18px;
        color: $color;
    }
    .text{
        width: 198px;
        height: 36px;
        outline: none;
        border: none;
        background:none;
        margin-left: 16px;
        border-bottom: solid 2px $color;
        color: black;
        font-weight: normal;
        font-size: 18px;
        padding: 5px;
    }
    .clear{
        margin-left: 61px;
        width: 164px;
        height: 40px;
        border: none;
        outline: none;
        border: none;
        background-color: #FFFFFF;
        box-shadow: 0 0 0 $color;
        font-weight: normal;
        font-size: 14px;
        color: $color;
        cursor: pointer;
        transition: all .3s ;
    }
    .block{
      display: block;
      margin: 40px auto;
    }
    .clear:hover{
        box-shadow: -7px 6px 10px $color;
        transform: translateX(20px);
    }
}
</style>

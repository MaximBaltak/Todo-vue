<template>
    <li class="el">
        <p class="task">{{text}}</p>
        <button class="delete" @click="deleteEl" ><img src="./../assets/exit.png" alt="exit"></button>
    </li>
</template>
<script>
export default {
  name: 'Task',
  props: ['id', 'text'],
  methods: {
    deleteEl () {
      this.$store.commit('deleteEl', this.id)
    }
  }
}
</script>
<style lang="scss" scoped>
$color: #FF7B7B;
.el{
    margin-top: 47px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 321px;
    height: 63px;
    background: #FFFFFF;
    box-shadow: -3px 6px 11px $color ;
    border-radius: 19px;
    .task{
        font-weight: normal;
        font-size: 18px;
        color:$color;
        width:250px;
        text-align: left;
        word-break: break-word;

    }
    button{
        outline:none;
        border: none;
        background:none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        img{
            width: 35px;
            height: 35px;
            transition: all .3s;
        }
    }
}
</style>

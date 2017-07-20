<template>
    <header>
      <img src="../../../static/images/logo.png" alt="">
      <div>看电影就选魔卫卡</div>
      <div>
        <img src="../../../static/images/dingwei.png" alt="">
        <span>天津</span>
      </div>
    </header>
</template>

<script>
  export default {
    name: 'header'
  }
</script>


<style scoped="header">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body{
    font-size: 20px;
    position: relative;
  }
  .cantain{
    display: flex;
    flex-direction:column;
    width: 18.75rem;
    /*height: 100%;*/
    height: 33.3rem;
  }
  header{
    display:flex;
    position: fixed;
    top:0;
    z-index:22;
    justify-content: space-between;
    flex-shrink:0;
    align-items:center ;
    width: 100%;
    /*height: 3.2rem;*/
    height: 2.275rem;
    background-color: #343434;
    color:#fff;
    padding:0 0.625rem;
  }
  header div{
    font-size:0.725rem;
  }
  header img{
    width: 2.07rem;
    height: 2.07rem;
  }
  header>div>img{
    width: 0.5rem;
    height: 0.7rem;
    colort:#fff;
    background-color: #fff;
  }
</style>

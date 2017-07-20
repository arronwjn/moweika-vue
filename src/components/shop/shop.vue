<template>
  <div id="app" class="cantain">
    <div class='main'>
      <img src="../../../static/images/shop.jpg" alt="">
    </div>
  </div>
</template>

<script>

  export default {
    name: 'shop',
  }
</script>

<style scoped="shop">
  /*@import '../../css/shop.css';*/
  /*@import '../../css/component.css';*/
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body{
    font-size: 20px;
    height: 100%;
  }
  .cantain{
    display: flex;
    flex-direction:column;
    width: 18.75rem;
    /*height: 100%;*/
    /*height: 33.3rem;*/
  }
  .main{
    /*height: 29.6rem;*/
    height: 100%;
  }
  .main img{
    width: 100%;
    height: 100%;
  }
  .cantain>footer{
    margin-top: 0;
  }
</style>

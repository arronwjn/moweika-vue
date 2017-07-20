<template>
  <header>
    <div>
      <span>天津</span>
      <img src="../../../static/images/cinema-header.jpg" alt="">
    </div>
    <div>影院</div>
    <img src="../../../static/images/cinema-search.jpg" alt="">
  </header>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style scoped="headers">
  /*头部*/
  header{
    display:flex;
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
    font-size: 0.725rem;
  }
  header div:nth-child(2){
    font-size:0.925rem;
  }
  header>img{
    width: 1rem;
    height: 1.1rem;
  }
  header>div>img{
    width: 0.625rem;
    height: 0.35rem;
  }
</style>

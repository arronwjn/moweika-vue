<template>
  <div id="app" class="cantain">
    <!--<keep-alive>-->
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    <!--</keep-alive>-->
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style spcoed>
  .cantain{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>

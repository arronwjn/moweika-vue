<template>
  <div class="home">
    <my-main v-if="!$route.meta.keepAlive"></my-main>
    <transition name="router-fade" mode="out-in">
      <router-view> </router-view>
    </transition>
  </div>

</template>

<script>

    import myHeader from './header.vue';
    import myFooter from './footer.vue';
    import myMain from './homeMain.vue';

    export default {
      name: 'home',
      components:{
        myHeader,
        myFooter,
        myMain,
      },
      methods:{
        detail(){
            this.$router.push({
              path:'/details'
            })
        }
      }
  }
</script>

<style scoped="home">
  .home{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }

</style>

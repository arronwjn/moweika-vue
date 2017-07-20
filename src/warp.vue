<template>
  <div id="app" class="cantain">
    <transition name="fade" mode="out-in">
      <router-view > </router-view>
    </transition>
    <my-footer v-if="$route.meta.btn || !$route.meta.keepAlive"></my-footer>
  </div>
</template>

<script>


  import myHeader from './components/home/header.vue';
  import myFooter from './components/home/footer.vue';
  import myHome from './components/home/home.vue'

  export default {
    name: 'app',

    components:{
      myHeader,
      myFooter,
      myHome
    },
    methods:{

    },
  }
</script>

<style>
  .cantain{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .fade-enter-active{
    opacity:0;
    transition: inset 0.1s ease 0.1s;
    background-color: #f7f5f1;
  }
  .fade-leave{
    opacity:0.2;
    transition: inset 0.1s ease 0.5s;
    background-color: #f7f5f1;
  }

  /*.fade-leave-active {*/
  /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  /*}*/

</style>

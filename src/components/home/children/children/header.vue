<template>
  <header class="aui-bar ">
    <a class="aui-pull-left aui-btn" >
            <span class="icon" style="color: #ffffff; font-size: 1rem;font-weight: 700;text-indent: 10px" @click="go()">
                <i class="iconfont icon-llmainpageback"></i>
            </span>
    </a>
    <div class="aui-title aui-font-size-16" style="color: #ffffff; font-size: 1rem;font-weight: 700;">影片评论</div>
    <a class="aui-pull-right aui-btn ">
      <span class='header-right' style="color: #e1e1e1; font-size: 0.8rem;font-weight: 700;padding-right: 10px"><label>1324</label>评论</span>
    </a>
  </header>
</template>

<script>
  export default{
      methods:{
        go(){
          this.$router.go(-1)
        },
      }
  }
</script>
<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#000;
    height: 2.275rem;
    width: 100%;
    padding:0 0.5rem;
  }
header a span i{
    font-size:1rem;
  }
</style>

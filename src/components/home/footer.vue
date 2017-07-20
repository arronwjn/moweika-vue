<template>
  <div class="footer">
    <footer>
      <router-link :to="{path:item.path,activeClass:'router-link-exact-active'}"  v-for="(item,index) in arr" key="index">
        <div>
          <img :src="item.url" alt="">
          <span>{{item.title}}</span>
        </div>
      </router-link>
    </footer>
  </div>
</template>

<script>

  import {arr} from '../../../static/data/data.js'

  export default {
    name: 'footer',
    data() {
      return{
          arr:arr
      }
    },
  }
</script>

<style scoped="footer">
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
  footer a{
    text-decoration: none;
  }
  /*底部*/

  footer{
    position: fixed;
    bottom: 0;
    z-index:22;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-shrink:0;
    width: 100%;
    background-color: #fff;
    height: 2.635rem;
    border-top:1px solid #e3d0b5;
    /*margin-top:0.445rem;/*/
    background: -webkit-radial-gradient(left,circle,#f4ede1, #fff, #fff); /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient(left,circle,#f4ede1, #fff, #fff); /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient(left,circle,#f4ede1, #fff, #fff); /* Firefox 3.6 - 15 */
    background: radial-gradient(left,circle,#f4ede1, #fff, #fff); /* 标准的语法 */
  }
  footer div{
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
  }
  footer div img{
    width: 1.175rem;
    height: 1.125 rem;
  }
  footer div span{
    font-size:0.525rem;
    color:#a5a5a5;
    margin-top:0.25rem;
  }
  .router-link-exact-active div span{
    color:#caaa7c;
  }
</style>

<template>
  <div class="home">
    <my-header ></my-header>
    <div class="main" >
      <div class="banner" >
        <div class="banner-warp">
          <div class="swiper-container" >
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for="str in listImg"  :style="{ backgroundImage: 'url(' + util.formatImg(str.images) + ')' ,backgroundSize: 'cover'}" ></div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
          </div>
        </div>
      </div>
      <div class="main-top">
        <input type="search" placeholder="查找影片、影院">
        <div class="main-top-button">
          <button>热映</button>
          <button @click="reflect()"><span>待映</span></button>
        </div>
      </div>
      <div class="main-footer">
        <div class="list-warp" v-for="(item,index) in filmlist" key="index" >
          <div class="list">
            <div class="list-left" @click="detail(item.id)">
              <img :src="util.formatImg(item.cover)" alt="">
              <div class="list-text">
                <h3>{{item.film_name}}</h3>
                <ul>
                  <li>观众<span>{{util.fomatFloat(item.commonRate,1)}}</span> |专业 <span>{{util.fomatFloat(item.rate,1)}}</span></li>
                  <li>{{item.desc}}</li>
                  <li>{{item.publishDate}}日全国上映</li>
                </ul>
              </div>
            </div>
            <button :class="item.pre_sale===1?'persal':null" v-show="item.pre_sale===1">预售</button>
            <button :class="item.pre_sale===null?'buy':null" v-show="item.pre_sale===null">购票</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import myHeader from './header.vue';
  import myFooter from './footer.vue';
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import {filmlist} from '../../../static/data/data.js';
  import axios from 'axios'

  export default {
    name: 'home',
    data(){
      return{
        filmlist:[],
        listImg:[],
        filmId:''
      }
    },
    created(){

      //获取热映、待映列表接口
      this.$http.post('http://movie.kaituo.local/Api/Film',{
          cmd:'u_getFilmList',
          city_code:'tj',
          state:'1',
          search:''
      })
        .then(res=>{
            console.log(res)
            this.filmlist=res.body.data.proList
        })

      //获取首页轮播接口
      this.$http.post('http://movie.kaituo.local/Api/Film',{
        cmd:'u_getFilmRollPic',
      })
        .then(res=>{
          this.listImg=res.body.data;
        })

    },
    mounted(){
      //定义swiper轮播图
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        autoplayDisableOnInteraction : false,
        speed: 600,
        autoplay: 4000,
        observer:true,
        observeParents:true,
        loopAdditionalSlides : 1,
        onTouchEnd: function() {
          swiper.startAutoplay()
        }
      });
    },
    components:{
      myHeader,
      myFooter,
    },
    methods:{

      //点击热映。待映列表跳到影片详情
      detail(filmId){
        this.$router.push({
          path:'/home/details/'+ filmId
        })
      },

      reflect(){
        this.$router.push({
          path:'home/reflect'
        })
      },

      //轮播图方法
      go(img){

//        console.log(img[0])
      },
    }
  }
</script>

<style scoped="home" >
  .home{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;

  }

  .main{
    flex-grow: 1;
    padding-top: 2.275rem;
    padding-bottom: 2.635rem;

  }
  /*::-webkit-scrollbar {!*隐藏滚轮*!*/
    /*display: none;*/
  /*}*/

  /*banner*/

  .banner{
    width: 100%;
    /*height: 100%;*/
  }
  .banner-warp{
    width: 100%;
  }

  /*主体内容*/

  /*main-top*/

  .main-top{
    position: relative;
    overflow: hidden;
    height: 5.175rem;
  }
  .main-top input{
    position: relative;
    left:50%;
    top:0%;
    transform: translate(-50%,20%);
    -moz-transform:translate(-50%,-120%);
    -webkit-transform: translate(-50%,20%);
    /*-moz-transform: translate(-50%,20%);*/
    /*-ms-transform: translate(-50%,20%);*/
    /*-o-transform: translate(-50%,20%);*/
    /*transform: translate(-50%,20%);*/
    width: 17.625rem;
    height: 1.75rem;
    border:none;
    outline: none;
    border:1px solid #c8a775;
    background: url("../../../static/images/search.jpg")no-repeat  35% center transparent;
    text-align: center;
    -webkit-background-size:1rem 1.05rem;
    background-size:1rem 1.05rem;
    color:#c8a775;
    border-radius: 5px;
    font-size:0.675rem;
    text-indent:2.05rem;
  }
  .main-top input:-moz-input-placeholder,
  textarea:-moz-input-placeholder {
    color: #c8a775;
  }

  .main-top input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #c8a775;
  }

  .main-top input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #c8a775;
  }
  .main-top-button{
    position: relative;
    top:50%;
    left:50%;
    transform: translate(-50%,-100%);
    width: 6.6rem;
    height: 1.6rem;
    color:#fff;
    text-align: right;
  }
  .main-top-button button{
    height: 121%;
    font-size:0.725rem;
    border-radius: 0.4rem;
  }
  .main-top-button>button:first-child{
    position: absolute;
    left:0.85rem;
    top:0rem;
    width: 3.075rem;
    color:#c8a775;
    background-color: #fff;
    border:none;
    outline: none;
    border:1px solid #c8a775;
  }
  .main-top-button>button:last-child{
    width: 3.275rem;
    background-color: #c8a775;
    border:none;
    outline: none;
    border:1px solid #c8a775;
    color:#fff;
    text-align: center;
  }
  .main-top-button>button:last-child>span{
    display: block;
    margin: 0 auto;
    margin-left: 0.5rem;
    text-align: center;
  }

  /*main-footer*/
  .main-footer{
    flex-grow: 1;
  }
  .list-warp{
    width: 100%;
    border-bottom: 1px #d3d5d7 solid;
  }
  .list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 50%;
    left:50%;
    transform: translate(-50%,-0%);
    width: 17.475rem;
    height: 5.025rem;
  }
  .list button{
    width: 3rem;
    line-height: 1.5rem;
    border-radius: 0.2rem;
    border: none;
    outline: none;
    font-size: 0.9rem;
    background-color: #fff;
    border: 1px solid #8aa4c1;
    color: #8aa4c1;
  }
  .list-left{
    display: flex;
    align-items: center;
  }
  .list-left img{
    width: 3.2rem;
    height: 4.5rem;
    border-radius: 0.125rem;
    border: 1px #e7d6bc solid;
    margin-right: 0.475rem;
  }
  .list-text h3{
    width: 11rem;
    font-size:0.8rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .list-text ul{
    margin-top:0.7rem;

  }
  .list-text ul li{
    width: 11rem;
    list-style: none;
    font-size:0.7rem;
    color:#8c8c8c;
    line-height:1rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;

  }
  .list .buy{
    color: #ff0f2b;
    border:1px #ff0f2b solid;
  }
  .list .persale{
    color:#8aa4c1;
    border:1px solid #8aa4c1;
  }

  /*swiper轮播图样式*/

  .swiper-container {
    width: 100%;
    height: 8rem;

  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;

  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet{
    width:0.833rem;
    height: 0.833rem;
    display: inline-block;
    background: #7c5e53;
  }
</style>

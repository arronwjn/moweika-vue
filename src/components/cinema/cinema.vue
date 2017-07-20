<template>

  <div class="cinema">
    <my-header></my-header>
    <div class="main">
      <div class="main-top" >
        <div v-for="(item,index) in Top" @click="tab(index)">
          <span :class="btn==index?'active':null">{{item.title}}</span>
          <img :src="item.url" alt="" :class="btn==index?'active-img':null">
        </div>
      </div>
      </div>
      <div class="main-footer">
        <div class="list-warp" v-for="item in proList">
          <div class="list">
            <div class="list-left">
              <ul>
                <li><h3>{{item.cinema_name}}</h3></li>
                <li>{{item.address}}</li>
                <li >
                  <ul >
                    <li :class="'li-'+index" v-for="(tab,index) in item.tag_names">{{tab}}</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="list-right">{{parseFloat(item.distance)}}km</div>
          </div>
        </div>
      </div>

    </div>

</template>

<script>
  //可复用组件
  import myFooter from '../home/footer.vue'
  import myHeader from './header.vue'

  //静态数据
  import {Top} from '../../../static/data/data'



  export default {

    name: 'cinema',
    components:{
        myHeader,
    },
    data(){
      return{
          proList:[],
          Top:Top,
          btn:null,
      }

    },
    created(){
        this.$http.post('http://movie.kaituo.local/Api/Cinema',{
            cmd:'u_getCinemaList',
            city_code:'tj',
            currentposition:'117.20,39.13'
        })
          .then(res=>{

            this.proList=res.body.data.proList;
            console.log(this.proList)
          })
    },
    methods:{
        tab(index){

          this.btn=index;
          console.log(index)
        },



    },
    watch: {

    }
  }
</script>

<style scoped="cinema" lang="less">


  .cinema{
    flex-grow: 1;
  }
  /*主体部分*/
  .main{
    /*height: 26.8rem;*/
    flex-grow:1;
    position: relative;
  }
  /*main-top*/

  /*main-top判断*/
  .active{
    color:#d3ac75;
  }
  .active-img{
    transform: rotate(180deg);
  }
  /*---------*/
  .main-top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fcfcfc;
    height: 1.8rem;
    border-bottom:1px solid #f1f1f1;
  }
  .main-top>div{
    width: 4.7rem;
    height: 1.175rem;
    text-align: center;
    font-size:0.7rem;
    color:#999999;
  }
  .main-top>div>img{
    width: 0.5rem;
    height: 0.3rem;
  }

  /*main-bottom*/

  .main-bottom{
    position: absolute;
    top:96px;
    left:0;
    width: 100%;
    height: 29rem;
    background-color: #ccc;
    overflow: hidden;
  }
  .main-bottom-left{
    width: 40%;
    height: 100%;
    background-color: #fff;
    float: left;
  }
  .main-bottom-right{
    width: 60%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    float: left;
  }
  /*main-footer*/
  .cinema .main-footer{
    width: 100%;
    height: 26.6rem;
    /*height: 100%;*/
    overflow-y:scroll;
    z-index:-1;
  }
  .list-warp{
    width: 100%;
    height: 4.95rem;
    border-bottom: 1px solid #f3f5f7;
  }
  .list{
    display: flex;
    justify-content: space-between;
    width: 17.525rem;
    position: relative;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
  .list-right{
    font-size:0.55rem;
    color:#222222;
  }
  .list-left>ul>li{
    list-style: none;
    line-height: 1.6rem;
  }
  .list-left>ul>li:nth-child(1){
    width: 10.8rem;
    display: flex;
    justify-content:space-between;
    align-items:center;
  }
  .list-left>ul>li:nth-child(1)>div{
    width: 3.5rem;
    line-height: 0.65rem;
    border:1px solid #bd9353;
    font-size: 0.4rem;
    overflow: hidden;
    border-radius: 0.125rem;
  }
  .list-left>ul>li:nth-child(1)>div button{
    width: 1.35rem;
    float: left;
    line-height: 0.75rem;
    color:#f7f0e7;
    background-color: #d3aa6c;
    border:none;
    outline: none;
    border-radius: 0.125rem;
    font-size: 0.4rem;
  }
  .list-left>ul>li:nth-child(1)>div span{
    display: block;
    float: left;
    width: 2.03rem;
    color: #bd9353;
    text-align: center;
  }
  .list-left ul li h3{
    font-size:0.625rem;
  }
  .list-left ul li:nth-child(2){
    font-size:0.55rem;
  }
  .list-left ul li>ul>li{
    list-style: none;
    float: left;
    font-size:0.525rem;
    line-height:1.025rem;
    border-radius: 0.125rem;
    padding:0 0.4rem;
    margin-right: 0.4rem;
  }
  .list-left ul li>ul{
    overflow: hidden;
  }
  .li-0{
    border:1px solid #538ac7;
    color:#538ac7;
  }
  .li-1{
    border:1px solid #deb71c;
    color:#deb71c;
  }
  .li-2{
    border:1px solid #f57020;
    color:#f57020;
  }
  .li-3{
    border:1px solid #fe230c;
    margin-right: 0;
    color:#fe230c;
  }

  /*底部*/

  .cantain footer{
    margin-top: 0;
  }

  /*muse样式*/

  #menu .demo-popup-left {
    display: flex;
    width: 20rem;
    max-width: 375px;
    height: 100%;
    align-items: center;
    padding: 24px;
    background-color: #fff;
  }
  #menu>.mu-popup-left{
    height: 100% !important;
  }
  #menu>.mu-popup{
    height: 100%;
  }
  .warp-ask  .mu-popup-left{
    height: 100%;
  }
  .ask{

    transform: translate3d(0,-19%,0);
  }
</style>

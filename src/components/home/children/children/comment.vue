<template>
  <div>
    <div id="app">
      <comment-header></comment-header>
      <div class="main">
        <div class="main-bottom">

          <div class="main-bottom-bottom">
            <div >
              <div class="main-bottom-bottom-top">
                <img src="" alt="">
                <ul>
                  <li><img src="../../../../../static/images/ticket-header4.png" alt=""></li>
                  <li><img src="../../../../../static/images/ticket-header4.png" alt=""></li>
                  <li><img src="../../../../../static/images/ticket-header4.png" alt=""></li>
                  <li><img src="../../../../../static/images/ticket-main-bottom2.jpg" alt=""></li>
                  <li><img src="../../../../../static/images/ticket-main-bottom2.jpg" alt=""></li>
                  <li>6分</li>
                </ul>
              </div>
              <div class="main-bottom-bottom-min">
                s cd
              </div>
              <div class="main-bottom-bottom-bottom">
                <div>scxc</div>
                <div class="main-bottom-bottom-right">
                  <img src="../../../../../static/images/dianzan.jpg" alt="">
                  <div>dcqdwcq</div>
                  <img src="../../../../../static/images/xinxi.jpg" alt="" @click="commentDetails()">
                  <div>cqc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-footer">

        </div>
      </div>
    </div>
    <div class="footter">
      <div @click="handle()"><i class="iconfont icon-yingping"></i>&nbsp;写回复</div>
    </div>
  </div>
</template>

<script>
  import commentHeader from './header.vue'

  export default{
      components:{
        commentHeader,
      },
      methods:{

        handle(){
          console.log('跳转到写回复组件')
        },
      }
  }
</script>

<style scoped="comment">
  /*主体内容*/
  .main{
    padding-top: 2.275rem;
  }

  /*main-bottom*/
  .main-bottom{
    background-color: #fff;
  }
  .main-bottom-top{
    height: 1.55rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#222222;
    font-size:0.625rem;
    padding:0 0.65rem;
  }
  .main-bottom-bottom{
    overflow: hidden;
    padding:0 0.65rem;
  }
  .main-bottom-bottom-top{
    display: flex;
    align-items: center;
  }
  .main-bottom-bottom-top img{
    width: 1.6rem;
    float: left;
  }
  .main-bottom-bottom-top>img{
    height: 1.6rem;
  }
  .main-bottom-bottom-top ul{
    overflow: hidden;
  }
  .main-bottom-bottom-top li{
    list-style: none;
    float: left;
    font-size: 0.6rem ;
    color:#e2ceb2;
    margin-left:0.3rem;
  }
  .main-bottom-bottom-top ul li img{
    width: 0.7rem;
  }
  .main-bottom-bottom-min{
    font-size: 0.6rem;
    color:#222222;
    margin-top:0.675rem;
    text-align: left;
  }
  .main-bottom-bottom-bottom{
    display: flex;
    justify-content: space-between;
    color:#999999;
    font-size: 0.425rem;
    margin-top: 0.675rem;
    margin-bottom: 0.75rem;
  }
  .main-bottom-bottom-right{
    width: 3.45rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .main-bottom-bottom-right img{
    width: 0.525rem;
    height: 0.575rem;
  }


  /*main-footer*/
  .main-footer{
    background-color: rgb(240,244,245);
  }
  /*底部*/
  .footter{
    position: fixed;
    width: 100%;
    bottom:0.5%;
    margin-left: 30%;
    margin-right: 30%;
  }
  .footter>div{
    width:40%;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    border-radius: 5px;
    background-color: #CF9E32;
    color: #FFFFFF;
    font-size:1rem;
  }
  .footter>div>i{
    font-size:1rem;
  }
  .aui-bar{
    position: fixed;
    background-color: #343434;
  }
  .xiangq{
    padding-top: 3rem;
    padding-bottom: 0.5rem;

  }
  .xiangq-top{
    display: -webkit-box;
  }
  .xiangq-top>div:nth-child(1){
    width:4rem;
    /*border:1px solid;*/
  }
  .xiangq-bootom{
    margin-top: 1rem;
    display: -webkit-box;
    /*margin-bottom: 0.5rem;*/
  }
  .xiangq{
    padding-left: 10%;
  }
  .contel{
    margin-left: 5%;
    color: #FFFFFF;
  }
  .contel i{
    color: #A78551;
  }
  .comment>p{
    height: 1.5rem;
    line-height: 1.5rem;
    border-bottom:1px solid #F4F6F8;
  }
  .xiangq-bootom>div{
    width:40%;
    height:1.5rem;
    line-height: 1.5rem;
    border-radius: 0.5rem;
    background-color:#8F8C8D;
    text-align: center;
    color: #FFFFFF;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .comment-details-top{
    height: 2rem;
    line-height: 2rem;
  }
  .text{
    padding: 10px;
  }
  .text>p{
    text-align: center;
  }
  .comment>div:last-child{
    text-align: center;
    border-top: 1px solid #F4F6F8;
    color: #E8BF6A;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .comment-details-top img{
    height:1.5rem;
    border-radius: 100%;
  }
  .img,.time-bottom,.time{
    display: -webkit-box;
  }
  .img{
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .img>div{
    text-indent: 10px;
    -webkit-box-flex: 1;
  }
  .img>p{
    width:4rem;
    text-align: center;
  }
  .time{
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .time p{
    -webkit-box-flex: 1;
  }
  .time-bottom>div{
    margin-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .pothome>div:last-child{
    text-align: center;
    color: #C5A35C;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .swopers{
    position: relative;
    height: 3rem;
  }
  .swopers{
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }

  .comment{
    margin-left: 10px;
    border-top: 0.5rem solid #F4F6F8;
    border-bottom: 0.1rem solid #F4F6F8;
  }
  .footy{
    position: fixed;
    bottom:0rem;
  }
  #app>div:last-child{
    width:100%;
    text-align: center;
    background-color: #F4F6F8;
  }
  #app>div:last-child>input{
    width:50%;
    height: 2rem;
    margin-top: 1rem;
    border-radius: 5px;
    color: #FFFFFF;
    border: 0px;
    background-color: #DDB547;
  }
  .comment-details{
    margin-top: 2rem;
  }
</style>

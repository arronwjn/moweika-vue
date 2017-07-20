<template>
  <div class="details">
    <div class="header" v-if="!$route.meta.comment && $route.meta.keepAlive">
      <div class="header-top">
        <img src="../../../../static/images/ticket-header1.jpg" alt="" @click="back()">
        <h3>影片详情</h3>
        <img src="../../../../static/images/ticket-header2.jpg" alt="">
      </div>
      <div class="header-min">
        <img :src="util.formatImg(data.cover)" alt="">
        <div>
          <h3>{{data.film_name}}</h3>
          <div >
             <span v-for="item in data.film_type">/{{item}}</span>
          </div>
          <div>中国丨{{data.play_times}}</div>
          <div>{{data.publishDate}}</div>
          <div class="score">
            <ul>
              <li>
                <img src="../../../../static/images/ticket-header4.png" alt="">
              </li>
              <li><img src="../../../../static/images/ticket-header4.png" alt=""></li>
              <li><img src="../../../../static/images/ticket-header4.png" alt=""></li>
              <li><img src="../../../../static/images/ticket-header4.png" alt=""></li>
              <li><img src="../../../../static/images/ticket-header5.png" alt=""></li>
              <li><span>{{ util.fomatFloat(data.commonRate,1)}}分</span></li>
            </ul>
          </div>
          <div>{{data.count_wantsee}}想看</div>
        </div>
      </div>
      <div class="header-bottom">
        <div>
          <img src="../../../../static/images/ticket-header7.jpg" alt="">
          想看
        </div>
        <div>
          <img src="../../../../static/images/ticket-header8.jpg" alt="">
          影评
        </div>
      </div>
    </div>
    <div class="main" v-if=" !$route.meta.comment && $route.meta.keepAlive ">
      <div class="main-top">
        <div>
          {{data.desc}}
        </div>
        <img src="../../../../static/images/ticket-main1.jpg" alt="">
      </div>
      <div class="main-min">
        <div class="main-min-top">
          <div>剧照</div>
          <div>{{data.count_Pic}}张</div>
        </div>
        <div class="main-min-min">
          <ul>
            <li v-for="item in proList"><img :src="util.formatImg(item.pic)" alt=""></li>
          </ul>
        </div>
        <div class="main-min-bottom">
          查看全部图集
        </div>
      </div>
      <div class="main-bottom">
        <div class="main-bottom-top">
          <div>用户评论</div>
          <div>4211</div>
        </div>
        <div class="main-bottom-bottom">
          <div v-for="item in commentList">
            <div class="main-bottom-bottom-top">
              <img :src="util.formatImg(item.avatar)" alt="">
              <ul>
                <li><img src="../../../../static/images/ticket-header4.png" alt=""></li>
                <li><img src="../../../../static/images/ticket-header4.png" alt=""></li>
                <li><img src="../../../../static/images/ticket-header4.png" alt=""></li>
                <li><img src="../../../../static/images/ticket-main-bottom2.jpg" alt=""></li>
                <li><img src="../../../../static/images/ticket-main-bottom2.jpg" alt=""></li>
                <li>6分</li>
              </ul>
            </div>
            <div class="main-bottom-bottom-min">
              {{item.content}}
            </div>
            <div class="main-bottom-bottom-bottom">
              <div>{{item.create_time}}</div>
              <div class="main-bottom-bottom-right">
                <img src="../../../../static/images/dianzan.jpg" alt="">
                <div>{{item.count_commentAgree}}</div>
                <img src="../../../../static/images/xinxi.jpg" alt="" @click="commentDetails()">
                <div>{{item.count_replyComment}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='main-footer'>
        <div>查看全部评论</div>
        <button>选座购票</button>
      </div>
    </div>
    <!--<keep-alive>-->
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    <!--</keep-alive>-->

  </div>

</template>

<script>
  import back from '../../../methods/back.js'


  export default {
    name: 'details',
    data(){
        return{
          filmId:this.$route.params.filmId,
          data:{},
          proList:[],
          commentList:[],
          wat:this.$route.meta.keepAlive
        }
    },
    created(){
      this.getpage();
    },
    methods:{
        back(){
          this.$router.go(-1)
        },
        commentDetails(){
          this.$router.push('/home/details/' + this.filmId + '/comment')
        },
        getpage(){
          //判断路由是否在影片详情页，如果是调以下接口

            //获取影片详情接口
            this.$http.post('http://movie.kaituo.local/Api/Film',{
              cmd:'u_getFilmDetail',
              id:this.filmId
            })
              .then(res=>{
                console.log(res)
                this.data=res.body.data;
              })

            //获取剧照列表
            this.$http.post('http://movie.kaituo.local/Api/Film',{
              cmd:'u_getFilmPictures',
              id:this.filmId
            })
              .then(res=>{
                console.log('pic',res)
                this.proList=res.body.data.proList;
              })

            //获取用户评论列表
            this.$http.post('http://movie.kaituo.local/Api/Film',{
              cmd:'u_getFilmComment',
              id:this.filmId,
              perPage:'2'
            })
              .then(res=>{
                console.log('pinglun',res)
                this.commentList=res.body.data.proList;
              })
        },
    },
    watch:{
      wat:function(value){
        if(value){
          this.getpage();
        }
      }
    }
  }
</script>

<style scoped="details">
  .details{
    background-color: #e4e7e9;
    /*height: 100%;*/
  }
  /*头部*/
  /*header-top */
  .header{
    /*height: 9.975rem;*/
    background-color: #8e9196;
    background: url(../../../../static/images/ticket-header-bg.jpg) no-repeat 100% 100%;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
  }
  .header-top{
    height: 1.95rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size:0.9rem;
    color:#f5f5f5;
    padding:0 0.625rem;
  }
  .header-top img:first-child{
    width: 0.6rem;
  }
  .header-top img:last-child{
    width: 1.075rem;
  }
  /*header-min*/
  .header-min{
    overflow: hidden;
  }
  .header-min>img{
    width: 3.875rem;
    height:5.5rem;
    border:1px solid #e7d6bc;
    float: left;
    margin:0.25rem 0.475rem 0.5rem 1.8rem;
  }
  .header-min>div{
    float: left;
    line-height:0.995rem;
  }
  .header-min>div h3{
    width: 8rem;
    font-size: 0.675rem;
    color: #ffffff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header-min>div{
    color: #d7d7d7;
    font-size:0.525rem;
  }
  .score ul{
    overflow: hidden;
  }
  .score ul li{
    list-style:none;
    float: left;
    margin-right:0.15rem;
  }
  .score ul li img{
    width: 0.625rem;
  }
  .score ul li:last-child{
    font-size:0.575rem;
    color:#bd9353;
    margin-left:0.15rem;
    margin-right:0;
  }

  /*header-bottom*/

  .header-bottom{
    display: flex;
    justify-content: space-between;
    padding:0 0.675rem;
  }
  .header-bottom div{
    width: 8.55rem;
    background-color: #828083;
    border-radius: 0.125rem;
    font-size:0.65rem;
    color:#e5e5e6;
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 0.25rem;
  }
  .header-bottom div img{
    width: 0.675rem;
  }

  /*主体内容*/

  /*main-top*/
  .main-top{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.425rem;
    background-color: #fff;
    height: 6.175rem;
    line-height: 1.125rem;
    padding:0.475rem 0.65rem;
  }
  .main-top div{
    width: 100%;
    height: 4rem;
    font-size:0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .main-top img{
    width: 0.6rem;
    margin-top: 0.65rem;
  }
  /*main-min*/
  .main-min{
    background-color: #fff;
    margin-top:0.5rem;
  }
  .main-min-top{
    height: 1.6rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.7rem;
    font-size:0.625rem;
    align-items: center;

  }
  .main-min-min{
    width: 18.575rem;
    /*height: 3.15rem;*/
    overflow-x: scroll;
  }
  .main-min-min ul{
    width: 30rem;
    overflow: hidden;
    overflow-x: scroll;
    overflow-x: auto;
  }
  .main-min-min ul li{
    list-style: none;
    float: left;
  }
  .main-min-min ul li img{
    width: 5.325rem;
    margin-left:0.55rem;
  }
  .main-min-bottom{
    font-size:0.55rem;
    color:#c8a775;
    text-align: center;
    line-height: 1.875rem;
  }
  /*main-bottom*/
  .main-bottom{
    background-color: #fff;
    margin-top: 0.475rem;
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
  .main-footer{
    position: relative;
    height: 1.525rem;
    border-top: 2px solid #f3f5f7;
  }
  .main-footer div{
    font-size: 0.525rem;
    color:#c8a775;
    background-color: #fff;
    line-height: 1.525rem;
    text-align: center;
  }
  .main-footer button {
    width: 9.925rem;
    height: 2.125rem;
    background-color: #cf9e36;
    position: absolute;
    top: 1.8rem;
    border-radius: 0.125rem;
    left: 25%;
    border: none;
    outline: none;
    font-size: 0.7rem;
    color: #fff;
  }

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
    /*opacity: 0;*/
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
    /*transition: opacity .2s;*/
  }
</style>

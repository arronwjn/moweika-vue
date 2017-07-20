<template>
  <div class="reflect">
    <header>
      <div class="main-top-button">
        <button @click="back()">热映</button>
        <button ><span>待映</span></button>
      </div>
    </header>
    <div class="main">
      <div class="main-footer">
        <div class="list-warp" v-for="(item,index) in filmlist" key="index" @click="detail()">
          <div class="list">
            <div class="list-left">
              <img :src="util.formatImg(item.cover)" alt="">
              <div class="list-text">
                <h3>{{item.film_name}}</h3>
                <ul>
                  <li>观众<span>{{item.commonRate}}</span> |专业 <span>{{item.rate}}</span></li>
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
  import back from '../../../methods/back.js'


  export default {
    name: 'details',
    data(){
      return{
        filmlist:[]
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
    },
    methods:{
      back(){
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped="reflect">
  .reflect{
    height: 100%;
  }
  header{
    width: 100%;
    display:flex;
    flex-shrink:0;
    align-items:center ;
    width: 100%;
    height: 2.275rem;
    background-color: #343434;
  }
  .main-top-button{
    position: relative;
    top:50%;
    left:50%;
    transform: translate(-50%,-80%);
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
    left:0.75rem;
    top:0rem;
    width: 3.075rem;
    color:#fff;
    background-color: #c8a775;
    border:none;
    outline: none;
    border:1px solid #c8a775;
    z-index:-1;
  }
  .main-top-button>button:last-child{
    width: 3.275rem;
    background-color: #fff;
    border:none;
    outline: none;
    border:1px solid #c8a775;
    color:#c8a775;
    text-align: center;
    z-index:2;
  }
  .main-top-button>button:last-child>span{
    display: block;
    margin: 0 auto;
    margin-left: 0.5rem;
    text-align: center;
  }
  .main{
    flex-grow: 1;
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
    width: 2.8rem;
    height: 3.975rem;
    border-radius: 0.125rem;
    border:1px #e7d6bc solid;
    margin-right:0.475rem;
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
</style>

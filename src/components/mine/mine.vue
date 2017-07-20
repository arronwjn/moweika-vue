<template>
  <div class="mine">
    <div class="header-top">
      <img src="../../../static/images/my-header.jpg" alt="">
      <div>
        <h3>沈淳</h3>
        <span>黄金会员</span>
      </div>
    </div>
    <div class="main">
      <div class="main-top">
        <div>
          <div>
            <img src="../../../static/images/my-main-top1.png" alt="">
            <span>想看</span>
          </div>
        </div>
        <div>
          <div>
            <img src="../../../static/images/my-main-top2.jpg" alt="">
            <span>看过</span>
          </div>
        </div>
        <div>
          <div>
            <img src="../../../static/images/my-main-top3.jpg" alt="">
            <span>评论</span>
          </div>
        </div>
      </div>
      <div class="main-min">
        <div class="main-min-top">
          <div>我的订单</div>
          <div>全部</div>
        </div>
        <div class="main-min-bottom">
          <div>
            <div>
              <img src="../../../static/images/my-main-min-bottom1.jpg" alt="">
              <span>未消费</span>
            </div>
          </div>
          <div>
            <div>
              <img src="../../../static/images/my-main-min-bottom2.jpg" alt="">
              <span>待付款</span>
            </div>
          </div>
          <div>
            <div>
              <img src="../../../static/images/my-main-min-bottom3.jpg" alt="">
              <span>待评价</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-footer">
        <ul>
          <li>
            <div>我的积分</div>
            <img src="../../../static/images/main-footer1.jpg" alt="">
          </li>
          <li>
            <div>我的消息</div>
            <img src="../../../static/images/main-footer1.jpg" alt="">
          </li>
          <li>
            <div>我的收藏</div>
            <img src="../../../static/images/main-footer1.jpg" alt="">
          </li>
          <li>
            <div>我的摩卫卡</div>
            <img src="../../../static/images/main-footer1.jpg" alt="">
          </li>
          <li>
            <div>我的成就</div>
            <img src="../../../static/images/main-footer1.jpg" alt="">
          </li>
          <li>
            <div>会员中心</div>
            <img src="../../../static/images/main-footer1.jpg" alt="">
          </li>
          <li>
            <div>设置</div>
            <img src="../../../static/images/main-footer1.jpg" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'mine',
  }
</script>

<style scoped="mine">
  .mine{
    flex-grow: 1;
  }
  .cantain{
    width: 100%;
    background-color: #f3f5f7;
  }
  /*头部*/
  .header-top{
    width: 18.75rem;
    height: 5.375rem;
    background-color: #d7bd94;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 2.475rem 0 1.125rem;
    color:#ffffff;
    font-size: 0.85rem;
  }
  .header-top div span{
    display: block;
    color:#f3ede4;
    font-size:0.725rem;
    margin-top: 0.575rem;
  }
  .header-top img{
    width: 3.25rem;
    height: 3.225rem;
  }

  /*主体内容*/
  /*main-top*/
  .main-top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2.9rem;
    background-color: #fff;
  }
  .main-top>div{
    width: 5.875rem;
    display: flex;
    justify-content: center;
    border-right:1px solid #e6e9ed;
  }
  .main-top>div:last-child{
    border-right:none;
  }
  .main-top>div>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .main-top div img{
    width: 1.125rem;
  }
  .main-top div span{
    font-size: 0.5rem;
    color:#666666;
    margin-top:0.475rem;
  }

  /*main-min*/

  .main-min{
    height: 4.7rem;
    background-color: #fff;
    margin-top:0.575rem;
  }
  .main-min-top{
    height: 1.725rem;
    display: flex;
    justify-content: space-between;
    font-size:0.575rem;
    padding:0 0.675rem;
    align-items:center;
    border-bottom: 1px solid #f3f5f7;
  }
  .main-min-top div:first-child{
    color: #666666;
  }
  .main-min-top div:last-child{
    color:#999999;
  }
  .main-min-bottom{
    display: flex;
    justify-content: space-around;
    align-items:center;
    height: 2.975rem;
  }
  .main-min-bottom>div{
    width: 5.875rem;
    display: flex;
    justify-content: center;

  }
  .main-min-bottom>div>div{
    display:flex;
    /*width: 1.8rem;*/
    flex-direction: column;
    align-items: center;
  }
  .main-min-bottom>div>div img{
    width: 0.85rem;
  }
  .main-min-bottom>div>div span{
    font-size: 0.525rem;
    margin-top: 0.425rem;
  }

  /*main-footer*/

  .main-footer{
    background-color: #fff;
    margin-top: 0.5rem;
    height: 16.075rem;
  }
  .main-footer ul li{
    height: 2.15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-size:0.75rem;
    color:#666666;
    padding:0 0.625rem;
    border-bottom: 1px solid #f3f5f7;
  }
  .main-footer ul li img{
    width: 0.425rem;
  }

  /*底部*/

  .cantain footer{
    margin-top:0;
    height: 3.635rem;
  }
</style>

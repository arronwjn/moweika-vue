import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
import Warp from '../warp.vue'


const Home = r => require.ensure([], () => r(require('../components/home/home.vue')), 'Home')
const Cinema = r => require.ensure([], () => r(require('../components/cinema/cinema.vue')), 'Cinema')
const Shop = r => require.ensure([], () => r(require('../components/shop/shop.vue')), 'Shop')
const Mine = r => require.ensure([], () => r(require('../components/mine/mine.vue')), 'Mine')
const Details = r => require.ensure([], () => r(require('../components/home/children/details.vue')), 'Details')
const HomeMain = r => require.ensure([], () => r(require('../components/home/homeMain.vue')), 'HomeMain')
const Reflect = r => require.ensure([], () => r(require('../components/home/children/reflect.vue')), 'Reflect')
const Comment = r => require.ensure([], () => r(require('../components/home/children/children/comment.vue')), 'Comment')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path:'/',
      component:Warp,//顶层路由
      children:[//二级路由对应App.vue
        //地址为空时跳转首页
        {
          path:'',
          redirect:'/home',
        },
        //首页电影列表
        {
          path:'/home',
          component:Home,
          children:[
            //首页待映热映列表详情页
            {
              path:'details/:filmId',
              component:Details,
              meta: { keepAlive: true},
              //跳到单个评论详情
              children:[
                {
                  path:'comment',
                  component:Comment,
                  meta: { keepAlive: true,comment:true },
                },
              ]
            },
            //待映列表
            {
              path:'reflect',
              component:Reflect,
              meta: { keepAlive: true,btn:true },
            }
          ]
        },
        //影院页
        {
          path:'/cinema',
          component:Cinema
        },
        //商城页面
        {
          path:'/shop',
          component:Shop,
        },
        //我的页面
        {
          path:'/mine',
          component:Mine,
        },

      ]
    }
  ]
})

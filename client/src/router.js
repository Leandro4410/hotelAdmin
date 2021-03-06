import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Login from './views/Login.vue'
// import Lock from './views/Lock.vue'
// import Main from './components/Main.vue'
// import Test from './views/Test.vue'
// import RoomInfor from './views/RoomInformation.vue'
// import History from './views/History.vue'
// import Statistics from './views/Statistics.vue';

Vue.use(Router)

const routes=[
  {
    path: '/',
    name: 'home',
    component: resolve => require(['./views/Home.vue'], resolve),
    meta:{
      requireAuth: true
    },
    children:[
      {
        path: '/',
        name: 'Main',
        component: resolve => require(['./components/Main.vue'], resolve),
        meta:{
          requireAuth: true
        },
      },
      {
        path: '/test',
        name: 'Test',
        component: resolve => require(['./views/Test.vue'], resolve),
        meta:{
          requireAuth: true
        },
      },
      {
        path: '/roomInfor',
        name: 'RoomInfor',
        component: resolve => require(['./views/RoomInformation.vue'], resolve),
        meta:{
          requireAuth: true
        },
      },
      {
        path: '/history',
        name: 'History',
        component: resolve => require(['./views/History.vue'], resolve),
        meta:{
          requireAuth: true
        },
      },
      {
        path: '/statistics',
        name: 'Statistics',
        component: resolve => require(['./views/Statistics.vue'], resolve),
        meta:{
          requireAuth: true
        },
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: resolve => require(['./views/Login.vue'], resolve),
   
  },
  {
    path: '/lock',
    name: 'Lock',
    component: resolve => require(['./views/Lock.vue'], resolve),
  },
  
]

const router=new Router({
  routes
});
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth&&window.localStorage.getItem('loginToken')===null||to.name==='Lock'&&window.localStorage.getItem('loginToken')===null){   //在未登录情况下，不给跳转到任何页面
    next({
      path:'/login'
    })
  }else if(to.meta.requireAuth&&window.localStorage.getItem('lock')!==null&&eval(window.localStorage.getItem('lock').toLowerCase())===true||to.name==='Login'&&window.localStorage.getItem('lock')!==null&&eval(window.localStorage.getItem('lock').toLowerCase())===true){   //在系统锁定情况下，不给跳转任何页面
    next({
      path:'/lock'
    })
  }else if(to.name==='Login'&&window.localStorage.getItem('loginToken')!==null||to.name==='Lock'&&eval(window.localStorage.getItem('lock').toLowerCase())===false){    //在已登录情况下不给跳转到登录页面，在系统未锁定情况下，不给跳转到系统锁定界面
    next(false)
  }else{
    next();
  }
})

export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home,
//       meta:{
//         requireAuth: true
//       }
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: Login
//     }
//   ]
// })


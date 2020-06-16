import AsyncComponent from '../untils/asyncComponent';
import Api from './../api/user';

// 静态路由
export let routes = [
  {
    path: "/login",
    name: "Login",
    component: AsyncComponent(() => import('../pages/Login/login')),
    auth: false
  },
  {
    path: "/",
    name: "index",
    component: AsyncComponent(() => import('../layout')),
    auth: true,
    children: [
      {
        path: "/home",
        name: "home",
        component: AsyncComponent(() => import('../pages/Home/home')),
        menuName: '主页',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      {
        path: "/operation",
        name: "operation",
        menuName: '运营管理',
        Icon:'vk-home',
        auth: true,
        children: [
          { 
           path: "/comment",
            name: "comment",
            component: AsyncComponent(() => import('../components/Comment/CommentApp')),
            menuName: '评论',
            Icon:'vk-home',
            auth: true,
            children:[]
          }
        ]
      },
      {
        path: "/todolist",
        name: "todolist",
        component: AsyncComponent(() => import('../components/TodoList')),
        menuName: 'Todo',
        Icon:'vk-home',
        auth: true,
        children: []
      },
    ]
  },
  {
    path: "/404",
    name: "404",
    component: AsyncComponent(() => import('../pages/404')),
    auth: false
  },
];

//动态路由
let dynamicRoute = [];
export let dynamicMenu = [];

// 获取动态路由
export function getDynamicRoute(){
  return new Promise((resolve, reject) => {
    if (dynamicRoute.length > 1) {
      resolve(dynamicRoute);
    } else {
      dynamicMenu=[];
      Api.MenuList().then(res => {
        if(res.data.Code === 1){
          let data = (res.data && res.data.Data) || [];
          console.log('data',data)
          dynamicMenu = [...data];
          console.log('dynamicMenu',dynamicMenu)
          let arr = filterRouter([...data]);
          console.log(arr)
          dynamicRoute = [...arr]
          console.log('dynamicRoute',dynamicRoute)
          
          resolve(dynamicRoute);
        }else{
          dynamicRoute = []
          resolve(dynamicRoute);
        }
      }).catch(err => {
        resolve(dynamicRoute = []);
      });
      
    }
    
  });
  
}

//过滤路由,去掉目录层级的路由
function filterRouter(routes) {
  let result = [];
  routes.forEach(route => {
    if(route.component) {
      route.component = AsyncComponent(() => import(`${route.component}`))
    }
    if (route.children && route.children.length > 0) {
      const tempRoutes = filterRouter(route.children)
      if (tempRoutes.length >= 1) {
        result = [...result, ...tempRoutes];
      }
    }else{
      result.push(route)
    }
  })
  routes[1].children.splice(1, 0, ...result)
  console.log(result)
  return result;
}

// 判断是否已经获取了动态路由
export function hasDynamicRoute() {
  return dynamicRoute.length > 0;
}
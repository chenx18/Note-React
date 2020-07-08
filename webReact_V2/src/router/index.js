import AsyncComponent from '@/untils/asyncComponent';
import Api from '@/api/user';

// 静态路由
export let routes = [
  {
    path: "/login",
    name: "Login",
    component: AsyncComponent(() => import('@/pages/Login/login')),
    auth: false
  },
  {
    path: "/",
    name: "index",
    component: AsyncComponent(() => import('@/layout')),
    auth: true,
    children: [
      {
        path: "/home",
        name: "Home",
        component: AsyncComponent(() => import('@/pages/Home/home')),
        menuName: '主页',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      {
        path: "/base",
        name: "Base",
        component: AsyncComponent(() => import('@/pages/Base')),
        menuName: '基础',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      {
        path: "/events",
        name: "Events",
        component: AsyncComponent(() => import('@/pages/Events')),
        menuName: '事件',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      {
        path: "/dataStream",
        name: "DataStream",
        component: AsyncComponent(() => import('@/pages/DataStream')),
        menuName: '数据流向',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      {
        path: "/formEvent",
        name: "FormEvent",
        component: AsyncComponent(() => import('@/pages/FormEvent')),
        menuName: '表单处理',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      {
        path: "/DOMRef",
        name: "DOMRef",
        component: AsyncComponent(() => import('@/pages/DOMRef')),
        menuName: 'DOM节点',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      {
        path: "/lifeCycle",
        name: "LifeCycle",
        component: AsyncComponent(() => import('@/pages/LifeCycle')),
        menuName: '生命周期',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      {
        path: "/componentAC",
        name: "ComponentAC",
        component: AsyncComponent(() => import('@/pages/ComponentAC')),
        menuName: '组件通信',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      {
        path: "/routConfing",
        name: "RoutConfing",
        component: AsyncComponent(() => import('@/pages/RoutConfing')),
        menuName: '路由配置',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      {
        path: "/operation",
        name: "operation",
        menuName: '状态管理（redux）',
        Icon:'vk-home',
        auth: true,
        children: [
          {
            path: "/books",
            name: "BookLsit",
            component: AsyncComponent(() => import('@/pages/ReduxManage/Books')),
            menuName: 'Redux',
            Icon:'vk-home',
            auth: true,
            children: []
          },
          {
            path: "/react-redux",
            name: "React-Redux",
            component: AsyncComponent(() => import('@/pages/ReduxManage/Music')),
            menuName: 'React-Redux',
            Icon:'vk-home',
            auth: true,
            children: []
          },
          {
            path: "/redux-thunk",
            name: "Redux-thunk",
            component: AsyncComponent(() => import('@/pages/ReduxManage/Thunks')),
            menuName: 'Redux-thunk',
            Icon:'vk-home',
            auth: true,
            children: []
          },
        ]
      },
      {
        path: "/axios-view",
        name: "AxiosView",
        component: AsyncComponent(() => import('@/pages/AxiosView')),
        menuName: 'Axios使用',
        Icon:'vk-home',
        auth: false,
        children: []
      },
      // { 
      //   path: "/comment",
      //   name: "comment",
      //   component: AsyncComponent(() => import('../components/Comment/CommentApp')),
      //   menuName: '组件',
      //   Icon:'vk-home',
      //   auth: true,
      //   children:[]
      // }
    ]
  },
  {
    path: "/404",
    name: "404",
    component: AsyncComponent(() => import('@/pages/404')),
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
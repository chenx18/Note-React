 // 引入 createStore 方法
import { createStore, combineReducers, applyMiddleware } from 'redux'; 

// 引入 redux-thunk
// 需要使用中间件，则需要引入 applyMiddleware
import Thunk from 'redux-thunk';


// 引入reduce,
// 不同页面可以创建自己的reuduce，需要要用 combineReducers 组合
import books from './reducer/bookReducer';
import music from './reducer/musicReducer'

//创建store (数据存储仓库)
const store = createStore(
  combineReducers({ 
    books, music
  }),
  applyMiddleware(Thunk)
);

export default store;
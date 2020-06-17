import { createStore } from 'redux';  // 引入 createStore 方法
import reducer from './reducer/reducer';

//创建store (数据存储仓库)
const store = createStore(reducer);

export default store;
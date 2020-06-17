import {ADD_BOOK_LIST, DEL_BOOK_ITEM} from '../actionTypes'
// Reducer 会接收到action的信息。将会进行状态（数据）的处理，
// 相当于react中的setState()的功能。如果有多个reducer ，
// 可以使用combineReducers方法将其合并，并暴露出去。

// Reducer里只能接收state，不能改变state

// 默认数据
const defaultState = {
  bookList:[
    {name: '走出唯一真理观',  speed: 88},
    {name: '银河系边缘的小失常', speed: 20}
  ]
}    

// 方法
export default (state = defaultState, action) => {
  console.log(state, action)
  //深度拷贝state
  let newState = JSON.parse(JSON.stringify(state)) 
  switch (action.type) {
    case ADD_BOOK_LIST:
      newState.bookList.push(action.value)
      return newState;

    case DEL_BOOK_ITEM:
      newState.bookList.splice(action.index, 1)  
      return newState;
      
    default: 
      return state;
  }
}
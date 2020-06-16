// Reducer 会接收到action的信息。将会进行状态（数据）的处理，
// 相当于react中的setState()的功能。如果有多个reducer ，
// 可以使用combineReducers方法将其合并，并暴露出去。


// 默认数据
const defaultState = {
  inputTodo: 'Write Something',
  TODOList:[
    '早起上班！'
  ]
}    

// 方法
export default (state = defaultState, action) => {
  return state;
}
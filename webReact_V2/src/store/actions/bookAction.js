import {ADD_BOOK_LIST , DEL_BOOK_ITEM}  from '../actionTypes'




// 删除书单
export const deleteItemAction = (index)=> ({ type: DEL_BOOK_ITEM, index })

// 添加书单
// 使用 react-thunk前写法
// export const addItemAction = (value)=> ({ type:ADD_BOOK_LIST , value})  

// 使用 react-thunk 写法，实现异步操作
export const addItemAction = (val)=> {
  return (dispatch) => {
    setTimeout(()=> {
      const action = { type:ADD_BOOK_LIST , value:val}
      dispatch(action)
    },1000)
    
  }

}
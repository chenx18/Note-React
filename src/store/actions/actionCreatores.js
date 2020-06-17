import {ADD_BOOK_LIST , DEL_BOOK_ITEM}  from './../actionTypes'

// 添加书单
export const addItemAction = (value)=> ({ type:ADD_BOOK_LIST , value})

// 删除书单
export const deleteItemAction = (index)=> ({ type: DEL_BOOK_ITEM, index })
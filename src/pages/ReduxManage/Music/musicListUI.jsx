import React from 'react';
import {connect} from 'react-redux'
import { CHANGE_MUSIC_INP,ADD_MUSIC_LIST,DEL_MUSIC_ITEM } from '@/store/actionTypes';

import {Input, Button, List} from 'antd'

const MusicList = (props) =>{
  console.log(props)
  const {inputMusic, list, clickBtn, inputChange, deleteItem} = props;
  return(
    <div style={{ margin: '10px' }}>
      <div>
        <Input placeholder={inputMusic} style={{ width: '250px', marginRight: '10px' }}
          onChange={inputChange} value={inputMusic} />
        <Button type="primary" onClick={clickBtn}>增加</Button>
      </div>
      <div style={{ margin: '10px 0', width: '323px' }}>
        <List bordered dataSource={list}
          renderItem={
            (item, index) =>
              <List.Item onClick={() => deleteItem(index)}>{item}</List.Item>
          }
        />
      </div>
    </div>
  )
}

const stateToProps = (state) => {
  const {music} = state
  return {
    inputMusic: music.inputMusic,
    list: music.musicList
  }
}

const dispatchToProps = (dispatch) => {
  return {
    // 输入
    inputChange(e){
      dispatch({
        type: CHANGE_MUSIC_INP,
        value: e.target.value
      })
    },

    // 添加
    clickBtn(){
      dispatch({
        type: ADD_MUSIC_LIST
      })
    },

    // 删除
    deleteItem(index){
      dispatch({
        type: DEL_MUSIC_ITEM,
        index
      })
    }

  }
}

export default connect(stateToProps,dispatchToProps)(MusicList);
//  connect 的作用是把UI组件（无状态组件）和业务逻辑代码的分开，
// 然后通过connect再链接到一起，让代码更加清晰和易于维护。
// 这也是React-Redux最大的有点。
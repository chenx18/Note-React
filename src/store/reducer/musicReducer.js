import {CHANGE_MUSIC_INP, ADD_MUSIC_LIST, DEL_MUSIC_ITEM} from '../actionTypes'

const defalutState = {
  inputMusic: '',
  musicList: []
}

export default (state = defalutState, action) => {
  console.log(state, action)
  //深度拷贝state
  let newState = JSON.parse(JSON.stringify(state)) 
  switch (action.type){
    case CHANGE_MUSIC_INP:
      newState.inputMusic = action.value
      return newState
    
    case ADD_MUSIC_LIST:
      let data = state.inputMusic;
      newState.musicList.push(data);
      newState.inputMusic='';
      return newState;

    case DEL_MUSIC_ITEM:
      newState.musicList.splice(action.index, 1)  
      return newState;
      
    default: 
      return state;
  }
}
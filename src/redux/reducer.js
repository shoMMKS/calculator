import { combineReducers } from 'redux'


const initialState = {
  worker: {
    name: '佐藤 太一郎',
    age: 41,
    sex: 0
  }
}

const reducers = (state = initialState) => state

export default combineReducers({
  initialState,
  reducers
})

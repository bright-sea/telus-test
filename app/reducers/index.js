import { combineReducers } from 'redux'
import images from 'reducers/images'
import setting from 'reducers/setting'

const rootReducer = combineReducers({
  images,
  setting,
})

export default rootReducer

import * as ActionType from 'actions/images'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function imagesReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_IMAGES:
      return Immutable.fromJS(action.response.data)
      break
    default:
      return state
  }
}

export default imagesReducer

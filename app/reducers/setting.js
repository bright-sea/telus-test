import * as ActionType from 'actions/images'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({
  filter: "#coffee",
  limit: 25,
  offset: 0,
  total: 0,
  size: "small",
})

export default function(state = defaultState, action) {
  switch(action.type) {

    case ActionType.CHANGE_FILTER:
      return state.merge({ filter: action.payload })

    case ActionType.CHANGE_SIZE:
      return state.merge({ size: action.payload })

    default:
      return state
  }
}

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

    case ActionType.CHANGE_PAGE:
      return state.merge({ offset: (action.payload - 1)*state.get("limit") })

    case ActionType.LOADED_IMAGES:

      console.log("pagination",action.response.pagination);
      return state.merge({
        total: action.response.pagination.totalCount,
        offset: action.response.pagination.offset
      })
      break


    default:
      return state
  }
}

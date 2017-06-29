import imageReducer from 'reducers/images'
import * as ActionType from 'actions/images'

describe('Reducer::Images', function(){
  it('returns an empty array as default state', function(){
    let action = { type: 'unknown' }
    let newState = imageReducer(undefined, { type: 'unknown' })
    expect(newState.toJS()).to.deep.equal([])
  })

  describe('on LOADED_IMAGES', function(){
    it('returns the `response` in given action', function(){
      let action = {
        type: ActionType.LOADED_IMAGES,
        response: { responseKey: 'responseVal' }
      }
      let newState = imageReducer(undefined, action)
      expect(newState.toJS()).to.deep.equal(action.response)
    })
  })
})

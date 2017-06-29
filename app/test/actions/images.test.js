import { CALL_API, CHAIN_API } from 'middleware/api'

import * as actionCreator from 'actions/images'
import * as ActionType from 'actions/imagess'

describe('Action::Image', function(){
  describe('#loadImages()', function(){
    it('returns action `CALL_API` info', function(){
      let action = actionCreator.loadImages()
      expect(action[CALL_API]).to.deep.equal({
        method: 'get',
        path: `/v1/gifs/search`,
        query: {
          api_key: 'dc6zaTOxFJmzC',
          q: "",
          limit: 20,
          offset: 0
        },
        successType: ActionType.LOADED_IMAGES
      })
    })
  })
})

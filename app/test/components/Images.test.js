import React from 'react'
import { shallow } from 'enzyme'
import Images from 'components/Images'
import Immutable from 'immutable'

describe('Component::Images', function(){
  let props
  beforeEach(function(){
    props = {
      images: Immutable.fromJS([
        { id: 1, images:{fixedWidth:{url: 'http://asd.com' }}},
        { id: 2, images:{fixedWidth:{url: 'http://asd.com' }}},
      ])
    }
  })
  function renderDoc () {
    return shallow(<Images {...props} />)
  }

  it('renders images', function(){
    let doc = renderDoc()
    let imageComps = doc.find("img")

    expect(imageComps.length).to.equal(props.images.size + 1)
  })
})

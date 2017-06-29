import { ImageContainer } from 'containers/Images'
import React from 'react'
import { shallow } from 'enzyme'
import Immutable from 'immutable'

describe('Container::Images', function(){
  let props
  beforeEach(function(){
    props = {
      loadImages: sinon.stub(),
      images: Immutable.fromJS([
        { id: 1, images:{fixedWidth:{url: 'http://asd.com' }}},
        { id: 2, images:{fixedWidth:{url: 'http://asd.com' }}},
      ])
    }
  })

  it('renders Images with images in props', function(){
    let doc = shallow(<ImagesContainer {...props}/>)
    let imagesComp = doc.find(Images)

    expect(imagesComp.props().images).to.equal(props.images)
  })
})

import React from 'react'

import { connect } from 'react-redux'
import { loadImages, changeFilter, changeSize } from '../actions/images';

import Images from 'components/Images'
import Helmet from 'react-helmet'

class HomeContainer extends React.Component {
  static fetchData({ store }) {
    return store.dispatch(loadImages(store.getState().setting))
  }

  componentDidMount() {
    this.props.loadImages(this.props.setting)
  }
  render() {

    const {
      images, setting,
      loadImages, changeFilter, changeSize,
    } = this.props;

    return (
      <div>
        <Helmet
          title="Home"
        />
        <div className="titleBar">
          <img src="/assets/images/logo.png"/>
        </div>

        <div style={{fontSize:"small"}}>
          GIPHY Image Search
        </div>

        <div>
          <input
            value={setting.get("filter")}
            onChange={ (evt) => changeFilter(evt.target.value)}
          />
          <button
            onClick = { () => loadImages(setting) }
          >Search</button>
        </div>

        <hr/>

        <div>
          <span style={{marginRight: 20}}>Image Size</span>
          <input type = "radio"
                 name = "imageSize"
                 id = "sizeSmall"
                 value = "small"
                 checked = {setting.get("size") ==="small" }
                 onChange={ (evt) => changeSize(evt.target.value)}
          />
          <label htmlFor = "sizeSmall">small</label>
          <input type = "radio"
                 name = "imageSize"
                 id = "sizeMed"
                 value = "medium"
                 checked = {setting.get("size") ==="medium" }
                 onChange={ (evt) => changeSize(evt.target.value)}
          />
          <label htmlFor = "sizeMed">medium</label>
          <input type = "radio"
                 name = "imageSize"
                 id = "sizeLarge"
                 value = "large"
                 checked = {setting.get("size") ==="large" }
                 onChange={ (evt) => changeSize(evt.target.value)}
          />
          <label htmlFor = "sizeLarge">large</label>

        </div>

        <Images images={images} size={setting.get("size")} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    images: state.images,
    setting: state.setting
  }
}

export { HomeContainer }
export default connect(mapStateToProps, { loadImages, changeFilter, changeSize })(HomeContainer)



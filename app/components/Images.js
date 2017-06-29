import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'

class Images extends Component {
  render() {

    const {
      size
    } = this.props

    const dimension = size==="small"? 100: (size==="medium"? 150:200)

    return (
      <div>
        {
          this.props.images.map((q)=> {
            let id = q.get('id')

            return (
              <div key={id} style={{float:"left", margin:10}}>
                <img  width={dimension} height={dimension} src={ q.get("images").get("fixedWidth").get("url") } />
              </div>
            )
          })
        }
      </div>
    )
  }
}

Images.propTypes = {
  images: PropTypes.instanceOf(List).isRequired
}

export default Images

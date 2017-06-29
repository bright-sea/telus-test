import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          defaultTitle="Telus Interview Test App"
          titleTemplate="%s - Telus Interview Test App"
          meta={[
            {"name": "description", "content": "An web app for Telus interview to test skills related to reactJs and nodeJs"},
          ]}
          htmlAttributes={{"lang": "en"}}
        />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)

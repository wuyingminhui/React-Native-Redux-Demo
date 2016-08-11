import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Counter from '../components/counter'
import * as counterActions from '../actions/actionTypes'

// @connect(state => ({
//   state: state.counter
// }))
class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { state, actions } = this.props
    return (
      <Counter
        counter={state.count}
        {...actions} />
    )
  }
}

export default connect(state => ({
  state: state.counter
}),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(App)

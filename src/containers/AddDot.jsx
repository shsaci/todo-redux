import React from 'react'
import {connect} from 'react-redux'
import {addDot} from '../actions'

let AddDot = ({dispatch}) => (
  <button onClick={e => { dispatch(addDot()) }}>+</button>
)

AddDot = connect()(AddDot)

export default AddDot

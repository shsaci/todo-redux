import React from 'react'

import AddDot from '../containers/AddDot'
import DotMatrix from '../containers/DotMatrix'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <DotMatrix />
        <AddDot />
      </div>
    )
  }
})

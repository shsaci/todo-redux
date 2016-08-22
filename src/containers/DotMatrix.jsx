import {connect} from 'react-redux'

import {toggleDot} from '../actions'
import {rightClick} from '../actions'
import Dots from '../components/Dots'

const mapStateToProps = (state) => {
  return {
    dots: state.dots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDotClick: (id) => {
      dispatch(toggleDot(id))
    },
    rightClick: (evt, id) => {
      evt.preventDefault()
      dispatch(rightClick(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dots)

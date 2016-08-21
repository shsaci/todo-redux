import {connect} from 'react-redux'

import {toggleDot} from '../actions'
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dots)

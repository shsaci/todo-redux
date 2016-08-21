import React, {PropTypes} from 'react'

const Dot = ({color, isOn, onClick}) => (
  <div
    className="dot"
    style={isOn ? { backgroundColor: color } : { backgroundColor: 'transparent' }}
    onClick={onClick}
    >
  </div>
)

Dot.propTypes = {
  color: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Dot

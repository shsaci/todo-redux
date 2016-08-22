import React, {PropTypes} from 'react'

const Dot = ({color, isOn, onClick, rightClick}) => (
  <div
    className="dot"
    style={isOn ? { backgroundColor: color } : { backgroundColor: 'none' }}
    onClick={onClick}
    onContextMenu={rightClick}
    >
  </div>
)

Dot.propTypes = {
  color: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  rightClick: PropTypes.func.isRequired
}

export default Dot

import React, {PropTypes} from 'react'

import Dot from './Dot'

const Dots = ({dots, onDotClick, rightClick}) => (
  <div>
    {dots.map(dot =>
      <Dot
        key={dot.id}
        {...dot}
        onClick={() => onDotClick(dot.id)}
        rightClick={(evt) => rightClick(evt, dot.id)}
      />
    )}
  </div>
)

Dots.propTypes = {
  dots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      isOn: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  onDotClick: PropTypes.func.isRequired,
  rightClick: PropTypes.func.isRequired
}

export default Dots

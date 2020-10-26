import React from 'react'
import PropTypes from 'prop-types'
const PresentationalCount = ({ number, onIncrement }) => {
  return (
    <div>
      <div>
        <span>{number}</span>
      </div>
      <button onClick={onIncrement}>더하기</button>
    </div>
  )
}
PresentationalCount.propTypes = {
  number: PropTypes.number,
  onIncrement: PropTypes.func,
}
PresentationalCount.defaultProps = {
  number: 0,
  onIncrement: () => console.warn('onIncrement check'),
}

export default PresentationalCount

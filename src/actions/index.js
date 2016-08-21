let nextDotId = 0

const getRandomHexColor = () => {
  // http://www.paulirish.com/2009/random-hex-color-code-snippets/
  let color = Math.floor(Math.random() * 16777216)
  color = `0${color.toString(16)}`
  return `#${color.slice(-6)}`
}

export const addDot = () => {
  return {
    type: 'ADD_DOT',
    id: nextDotId++,
    color: getRandomHexColor()
  }
}

export const toggleDot = (id) => {
  return {
    type: 'TOGGLE_DOT',
    id
  }
}

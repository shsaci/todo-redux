const dot = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DOT':
      return {
        id: action.id,
        color: action.color,
        isOn: false
      }

    case 'TOGGLE_DOT':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        isOn: !state.isOn
      })

    default:
      return state
  }
}

const dots = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DOT':
      return [
        ...state,
        dot(undefined, action)
      ]

    case 'TOGGLE_DOT':
      return state.map(d => {
        return dot(d, action)
      })

    default:
      return state
  }
}

export default dots

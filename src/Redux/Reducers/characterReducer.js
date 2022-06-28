export default function characterReduer(state = {}, action) {
  switch (action.type) {
    case "SET_CHARACTER_DATA": {
      return { ...state, ...action.payload };
    }
    case "CHARACTER_ALL_REQUEST": {
      return { ...state, ...action.payload, }
    }
    case "CHARACTER_ALL_SUCCESS": {
      return { ...state, ...action.payload }
    }
    case "CHARACTER_ALL_FAILED": {
      return { ...state, ...action.payload }
    }
    default: {
      return { ...state }
    }
  }
}

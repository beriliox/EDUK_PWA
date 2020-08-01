import { createStore } from "redux"

const initialState = {
  object: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_TYPE_NAME":
      return {
        ...state,
      }
  }
  return state
}

export default createStore(reducer)

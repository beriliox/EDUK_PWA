import { createStore } from "redux"

const initialState = {
  object: [],
  showHelp: true,
  onSelect: 0,
  object: false,
  show: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE_MODAL":
      return {
        ...state,
        showHelp: false,
      }
  }
  return state
}

export default createStore(reducer)

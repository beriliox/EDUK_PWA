const initialState = {
  showHelp: true,
  onSelect: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SHOWHELP":
      return {
        ...state,
        showHelp: false,
      }
    default:
      return state
  }
}

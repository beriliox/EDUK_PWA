const initialState = {
  showHelp: true,
  onSelect: 0,
  show: false,
  obj: false,
  showBody: true,
  showDefaultImage: true,
  showImage: false,
  show3D: false,
  showVideo: false,
  showMasInfo: false,
  showSelectCedula: "selected",
  showSelectVideo: "deselected",
  showSelect3D: "deselected",
  showSelectMasInfo: "deselected",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_OBJECT":
      return {
        ...state,
        obj: action.obj,
      }
    case "TOGGLE_ONSELECT":
      return {
        ...state,
        onSelect: action.onSelect,
      }
    case "TOGGLE_SHOW":
      return {
        ...state,
        show: action.show,
      }
    case "TOGGLE_SHOWHELP":
      return {
        ...state,
        showHelp: action.showHelp,
      }
    case "TOGGLE_SHOWBODY":
      return {
        ...state,
        showBody: action.showBody,
      }
    case "TOGGLE_SHOWDEFAULT_IMAGE":
      return {
        ...state,
        showDefaultImage: action.showDefaultImage,
      }
    case "TOGGLE_SHOWIMAGE":
      return {
        ...state,
        showImage: action.showImage,
      }
    case "TOGGLE_SHOW3D":
      return {
        ...state,
        show3D: action.show3D,
      }
    case "TOGGLE_SHOWVIDEO":
      return {
        ...state,
        showVideo: action.showVideo,
      }
    case "TOGGLE_SHOWMASINFO":
      return {
        ...state,
        showMasInfo: action.showMasInfo,
      }
    case "TOGGLE_SHOWSELECT_CEDULA":
      return {
        ...state,
        showSelectCedula: action.showSelectCedula,
      }
    case "TOGGLE_SHOWSELECT_VIDEO":
      return {
        ...state,
        showSelectVideo: action.showSelectVideo,
      }
    case "TOGGLE_SHOWSELECT_3D":
      return {
        ...state,
        showSelect3D: action.showSelect3D,
      }
    case "TOGGLE_SHOWSELECT_MASINFO":
      return {
        ...state,
        showSelectMasInfo: action.showSelectMasInfo,
      }
    default:
      return state
  }
}

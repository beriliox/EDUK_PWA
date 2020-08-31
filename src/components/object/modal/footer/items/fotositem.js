import React from "react"
import { connect } from "react-redux"

const FotosItem = ({
  toggleShowDefaultImage,
  toggleShow3D,
  toggleShowVideo,
  toggleShowMasInfo,
  toggleShowImage,
  toggleShowBody,
  toggleShowSelectVideo,
  toggleShowSelect3D,
  toggleShowSelectMasInfo,
  toggleShowSelectCedula,
  showSelectCedula,
}) => {
  const _showCedula = () => {
    toggleShowDefaultImage(true)
    toggleShow3D(false)
    toggleShowVideo(false)
    toggleShowMasInfo(false)
    toggleShowImage(false)
    toggleShowBody(true)

    toggleShowSelectVideo("deselected")
    toggleShowSelect3D("deselected")
    toggleShowSelectMasInfo("deselected")
    toggleShowSelectCedula("selected")
  }
  return (
    <p onClick={() => _showCedula()} className={showSelectCedula}>
      Fotos
    </p>
  )
}

const mapStateToProps = state => ({
  showSelectCedula: state.app.showSelectCedula,
})
const mapDispatchToProps = dispatch => ({
  toggleShowBody(showBody) {
    dispatch({
      type: "TOGGLE_SHOWBODY",
      showBody,
    })
  },
  toggleShowDefaultImage(showDefaultImage) {
    dispatch({
      type: "TOGGLE_SHOWDEFAULT_IMAGE",
      showDefaultImage,
    })
  },
  toggleShowImage(showImage) {
    dispatch({
      type: "TOGGLE_SHOWIMAGE",
      showImage,
    })
  },
  toggleShow3D(show3D) {
    dispatch({
      type: "TOGGLE_SHOW3D",
      show3D,
    })
  },
  toggleShowVideo(showVideo) {
    dispatch({
      type: "TOGGLE_SHOWVIDEO",
      showVideo,
    })
  },
  toggleShowMasInfo(showMasInfo) {
    dispatch({
      type: "TOGGLE_SHOWMASINFO",
      showMasInfo,
    })
  },
  toggleShowSelectVideo(showSelectVideo) {
    dispatch({
      type: "TOGGLE_SHOWSELECT_VIDEO",
      showSelectVideo,
    })
  },
  toggleShowSelect3D(showSelect3D) {
    dispatch({
      type: "TOGGLE_SHOWSELECT_3D",
      showSelect3D,
    })
  },
  toggleShowSelectMasInfo(showSelectMasInfo) {
    dispatch({
      type: "TOGGLE_SHOWSELECT_MASINFO",
      showSelectMasInfo,
    })
  },
  toggleShowSelectCedula(showSelectCedula) {
    dispatch({
      type: "TOGGLE_SHOWSELECT_CEDULA",
      showSelectCedula,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FotosItem)

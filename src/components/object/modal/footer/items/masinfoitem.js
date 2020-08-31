import React from "react"
import { connect } from "react-redux"

const MasInfoItem = ({
  object,
  toggleShowDefaultImage,
  toggleShow3D,
  toggleShowVideo,
  toggleShowMasInfo,
  toggleShowImage,
  toggleShowBody,
  toggleShowSelectMasInfo,
  toggleShowSelectCedula,
  toggleShowSelectVideo,
  toggleShowSelect3D,
  showSelectMasInfo,
}) => {
  const _showMasInfo = masInfo => {
    toggleShowImage(false)
    toggleShow3D(false)
    toggleShowVideo(false)
    toggleShowMasInfo(masInfo)
    toggleShowDefaultImage(false)
    toggleShowBody(false)

    toggleShowSelectCedula("deselected")
    toggleShowSelect3D("deselected")
    toggleShowSelectVideo("deselected")
    toggleShowSelectMasInfo("selected")
  }

  const masInfo = object ? object.body : ""

  return masInfo ? (
    <p
      className={showSelectMasInfo}
      onClick={() => _showMasInfo(masInfo.value)}
    >
      Más información
    </p>
  ) : null
}

const mapStateToProps = state => ({
  showSelectMasInfo: state.app.showSelectMasInfo,
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

export default connect(mapStateToProps, mapDispatchToProps)(MasInfoItem)

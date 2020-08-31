import React from "react"
import { connect } from "react-redux"

const Video3DItem = ({
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
  showSelect3D,
}) => {
  const _selectVideo = (res, type) => {
    toggleShowDefaultImage(false)
    toggleShowMasInfo(false)
    toggleShowImage(false)
    toggleShowBody(false)
    toggleShowSelectMasInfo("deselected")
    toggleShowSelectCedula("deselected")
    if (type === "video") {
      toggleShow3D(false)
      toggleShowVideo(res)
      toggleShowSelectVideo("selected")
      toggleShowSelect3D("deselected")
    }
    if (type === "3d") {
      toggleShow3D(res)
      toggleShowVideo(false)
      toggleShowSelectVideo("deselected")
      toggleShowSelect3D("selected")
    }
  }

  const _3d = object ? object.relationships.field_3d : null

  return _3d ? (
    <p
      className={showSelect3D}
      onClick={() => _selectVideo(object.relationships.field_3d, "3d")}
    >
      3D
    </p>
  ) : null
}

const mapStateToProps = state => ({
  showSelect3D: state.app.showSelect3D,
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

export default connect(mapStateToProps, mapDispatchToProps)(Video3DItem)

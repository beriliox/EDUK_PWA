import React from "react"
import { connect } from "react-redux"

const VideoItem = ({
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
  showSelectVideo,
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

  const video = object ? object.relationships.field_video : null

  return video ? (
    <p
      className={showSelectVideo}
      onClick={() => _selectVideo(object.relationships.field_video, "video")}
    >
      Video
    </p>
  ) : null
}

const mapStateToProps = state => ({
  showSelectVideo: state.app.showSelectVideo,
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoItem)

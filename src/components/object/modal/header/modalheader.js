import React from "react"
import { connect } from "react-redux"
import { Image, Modal } from "react-bootstrap"
import Video from "../../video/video"
import modalHeaderStyles from "./modalheader.module.scss"

const ModalHeader = ({
  object,
  showImage,
  showVideo,
  show3D,
  showDefaultImage,
  showMasInfo,
}) => {
  const objectImageProp = object
    ? object.relationships.field_imagen[0].localFile
    : ""

  const defaultImage = objectImageProp ? objectImageProp.publicURL : ""
  const selectedImage = showImage ? showImage.localFile.publicURL : ""
  const selectedVideo = showVideo ? showVideo.localFile.publicURL : ""
  const selected3D = show3D ? show3D.localFile.publicURL : ""
  const selectedMasInfo = showMasInfo ? showMasInfo : ""

  return (
    <Modal.Header closeButton className={modalHeaderStyles.modalHeader}>
      {showVideo ? (
        <div id="objectVideo" className={modalHeaderStyles.Video}>
          <Video videoSrcURL={selectedVideo} />
        </div>
      ) : null}
      {show3D ? (
        <div id="object3D" className={modalHeaderStyles.Video}>
          <Video videoSrcURL={selected3D} />
        </div>
      ) : null}
      {showDefaultImage ? (
        <div id="defaultImage" className={modalHeaderStyles.defaultImage}>
          <Image className={modalHeaderStyles.Image} src={defaultImage} />
        </div>
      ) : null}
      {showImage ? (
        <div id="objectImage">
          <Image className={modalHeaderStyles.Image} src={selectedImage} />
        </div>
      ) : null}
      {showMasInfo ? (
        <div
          className={modalHeaderStyles.MasInfo}
          dangerouslySetInnerHTML={{ __html: selectedMasInfo }}
        ></div>
      ) : null}
    </Modal.Header>
  )
}

const mapStateToProps = state => ({
  show3D: state.app.show3D,
  showVideo: state.app.showVideo,
  showImage: state.app.showImage,
  showDefaultImage: state.app.showDefaultImage,
  showMasInfo: state.app.showMasInfo,
})

const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(ModalHeader)

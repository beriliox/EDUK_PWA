import React from "react"
import { connect } from "react-redux"
import { Image, Modal } from "react-bootstrap"
import modalBodyStyles from "./modalbody.module.scss"

const ModalBody = ({
  object,
  objectImages,
  toggleShowBody,
  toggleShow3D,
  toggleShowVideo,
  toggleShowMasInfo,
  toggleShowImage,
  toggleShowDefaultImage,
}) => {
  const _selectImage = (e, images) => {
    const currentImage = e.target.id
    images.forEach((img, key) => {
      if (currentImage === `imageObject-${key}`) {
        toggleShowDefaultImage(false)
        toggleShow3D(false)
        toggleShowVideo(false)
        toggleShowMasInfo(false)
        toggleShowImage(img)
        toggleShowBody(true)
      }
    })
  }

  return (
    <Modal.Body className={modalBodyStyles.modalBody}>
      <div className={modalBodyStyles.modalImagesBlock}>
        {objectImages.map((image, key) => {
          if (image.localFile) {
            return (
              <Image
                id={`imageObject-${key}`}
                onClick={e =>
                  _selectImage(e, object.relationships.field_imagen)
                }
                src={image.localFile.publicURL}
                className={modalBodyStyles.imageCarousel}
              />
            )
          }
        })}
      </div>
    </Modal.Body>
  )
}

const mapStateToProps = () => ({})

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
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalBody)

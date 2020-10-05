import React from "react"
import { connect } from "react-redux"
import { Image, Modal } from "react-bootstrap"
import modalBodyStyles from "./modalbody.module.scss"

const ModalBody = ({
  object,
  showBody,
  toggleShowBody,
  toggleShow3D,
  toggleShowVideo,
  toggleShowMasInfo,
  toggleShowImage,
  toggleShowDefaultImage,
}) => {
  const _selectImage = (e, images) => {
    const currentImage = e.target.id
    const sublings = Object.values(e.target.parentElement.children)

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
    if (
      !e.target.getAttribute("active") ||
      e.target.getAttribute("active") === "false"
    ) {
      e.target.setAttribute("active", "true")
      sublings.forEach(sub => {
        if (currentImage !== sub.id) {
          sub.setAttribute("active", "false")
        }
      })
    }
  }

  const objectImages = object ? object.relationships.field_imagen : []

  return showBody ? (
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
  ) : null
}

const mapStateToProps = state => ({
  showBody: state.app.showBody,
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
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalBody)

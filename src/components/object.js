import React, { useState } from "react"
import { Image, Carousel, Modal } from "react-bootstrap"
import Video from "./video"
import objectStyles from "./object.module.scss"
import "./object.css"

const ObjectComponent = ({ props }) => {
  const objectImageProp = props.object
    ? props.object.relationships.field_imagen[0].localFile
    : ""

  const defaultImage = objectImageProp ? objectImageProp.publicURL : ""

  const [showDefaultImage, setShowDefaultImage] = useState(true)

  const [showSelectCedula, setShowSelectCedula] = useState("selected")
  const [showSelectVideo, setShowSelectVideo] = useState("deselected")
  const [showSelect3D, setShowSelect3D] = useState("deselected")

  const [showImage, setShowImage] = useState(false)
  const [objectImage, setObjectImage] = useState(false)
  const selectedImage = objectImage ? objectImage.localFile.publicURL : ""

  const [showVideo, setShowVideo] = useState(false)
  const [objectVideo, setObjectVideo] = useState(false)
  const selectedVideo = objectVideo ? objectVideo.localFile.publicURL : ""

  const [show3D, setShow3D] = useState(false)
  const [object3D, setObject3D] = useState(false)
  const selected3D = object3D ? object3D.localFile.publicURL : ""

  const show = props.show
  const handleClose = props.handleClose
  const object = props.object

  const _selectImage = (e, images) => {
    const currentImage = e.target.id
    images.forEach((img, key) => {
      if (currentImage === "imageObject-" + key) {
        setShowDefaultImage(false)

        setObject3D(false)
        setShow3D(false)

        setObjectVideo(false)
        setShowVideo(false)

        setObjectImage(img)
        setShowImage(true)
        setShowSelectVideo("deselected")
        setShowSelect3D("deselected")
        setShowSelectCedula("selected")
      }
    })
  }

  const _showCedula = () => {
    setObjectVideo(false)
    setShowVideo(false)

    setObject3D(false)
    setShow3D(false)

    setObjectImage(false)
    setShowImage(false)

    setShowDefaultImage(true)
    setShowSelectVideo("deselected")
    setShowSelect3D("deselected")
    setShowSelectCedula("selected")
  }

  const _selectVideo = (res, type) => {
    setShowImage(false)
    setObjectImage(false)
    setShowDefaultImage(false)
    setShowSelectCedula("deselected")
    if (type === "video") {
      setObject3D(false)
      setShow3D(false)
      setObjectVideo(res)
      setShowVideo(true)
      setShowSelect3D("deselected")
      setShowSelectVideo("selected")
    }
    if (type === "3d") {
      setObjectVideo(false)
      setShowVideo(false)
      setObject3D(res)
      setShow3D(true)
      setShowSelectVideo("deselected")
      setShowSelect3D("selected")
    }
  }

  const title = object ? object.title : ""
  const material = object ? object.field_material : ""
  const site = object ? object.field_sitio_arqueologico : ""
  const commune = object ? object.field_comuna : ""
  const province = object ? object.field_provincia : ""
  const code = object ? object.field_codigo : ""
  const objectImages = object ? object.relationships.field_imagen : []
  const video = object ? object.relationships.field_video : null
  const _3d = object ? object.relationships.field_3d : null
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={objectStyles.modalHeader}>
          {showVideo ? (
            <div id="objectVideo" className={objectStyles.Video}>
              <Video videoSrcURL={selectedVideo} />
            </div>
          ) : null}
          {show3D ? (
            <div id="object3D" className={objectStyles.Video}>
              <Video style={"holi: holi;"} videoSrcURL={selected3D} />
            </div>
          ) : null}
          {showDefaultImage ? (
            <div id="defaultImage">
              <Image className={objectStyles.Image} src={defaultImage} />
            </div>
          ) : null}
          {showImage ? (
            <div id="objectImage">
              <Image className={objectStyles.Image} src={selectedImage} />
            </div>
          ) : null}
        </Modal.Header>
        <Modal.Body className={objectStyles.modalBody}>
          <div className={objectStyles.modalImagesBlock}>
            {objectImages.map((image, key) => {
              if (image.localFile) {
                return (
                  <Image
                    id={`imageObject-${key}`}
                    onClick={e =>
                      _selectImage(e, object.relationships.field_imagen)
                    }
                    src={image.localFile.publicURL}
                    className={objectStyles.imageCarousel}
                  />
                )
              }
            })}
          </div>
        </Modal.Body>
        <Modal.Footer className={objectStyles.modalContentFooter}>
          <div className={objectStyles.objectInfoBlock}>
            <div className={objectStyles.objectInfo}>
              <p className={objectStyles.objectTitle}>{title}</p>
              <p>{material}</p>
              <p>{site}</p>
              <p>{`${commune}, ${province}`}</p>
              <p>{code}</p>
            </div>
          </div>
          <div className={objectStyles.objectInfoBlock}>
            <div className={objectStyles.objectInfoResources}>
              <p
                onClick={() => _showCedula(object.relationships.field_imagen)}
                className={showSelectCedula}
              >
                Cédula
              </p>
              {_3d ? (
                <p
                  className={showSelect3D}
                  onClick={() =>
                    _selectVideo(object.relationships.field_3d, "3d")
                  }
                >
                  3D
                </p>
              ) : null}
              {video ? (
                <p
                  className={showSelectVideo}
                  onClick={() =>
                    _selectVideo(object.relationships.field_video, "video")
                  }
                >
                  Video
                </p>
              ) : null}
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ObjectComponent

import React, { useState } from "react"
import { Image, Carousel, Modal } from "react-bootstrap"
import Video from "./video"

const ObjectComponent = ({ props }) => {
  const defaultImage = props.object
    ? props.object.relationships.field_imagen[0].localFile.publicURL
    : ""
  const [showDefaultImage, setShowDefaultImage] = useState(true)

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
  }

  const _selectVideo = (res, type) => {
    setShowImage(false)
    setObjectImage(false)
    setShowDefaultImage(false)
    if (type === "video") {
      setObject3D(false)
      setShow3D(false)
      setObjectVideo(res)
      setShowVideo(true)
    }
    if (type === "3d") {
      setObjectVideo(false)
      setShowVideo(false)
      setObject3D(res)
      setShow3D(true)
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
        <Modal.Header closeButton>
          {showVideo ? (
            <div id="objectVideo">
              <Video videoSrcURL={selectedVideo} />
            </div>
          ) : null}
          {show3D ? (
            <div id="object3D">
              <Video videoSrcURL={selected3D} />
            </div>
          ) : null}
          {showDefaultImage ? (
            <div id="defaultImage">
              <Image src={defaultImage} />
            </div>
          ) : null}
          {showImage ? (
            <div id="objectImage">
              <Image src={selectedImage} />
            </div>
          ) : null}
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {objectImages.map((image, key) => {
              return (
                <Carousel.Item key={key}>
                  <Image
                    id={`imageObject-${key}`}
                    onClick={e =>
                      _selectImage(e, object.relationships.field_imagen)
                    }
                    src={image.localFile.publicURL}
                  />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <div>{title}</div>
          <div>{material}</div>
          <div>{site}</div>
          <div>{`${commune}, ${province}`}</div>
          <div>{code}</div>
          <div>
            <div onClick={() => _showCedula(object.relationships.field_imagen)}>
              Cédula
            </div>
            {_3d ? (
              <div
                onClick={() =>
                  _selectVideo(object.relationships.field_3d, "3d")
                }
              >
                3D
              </div>
            ) : null}
            {video ? (
              <div
                onClick={() =>
                  _selectVideo(object.relationships.field_video, "video")
                }
              >
                Video
              </div>
            ) : null}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ObjectComponent

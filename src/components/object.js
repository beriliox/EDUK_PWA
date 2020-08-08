import React from "react"
import { Image, Carousel, Modal } from "react-bootstrap"
import Video from "./video"

const ObjectComponent = ({ props }) => {
  //const [objectImage, setObjectImage] = useState(false)

  let show = props.show
  let handleClose = props.handleClose
  let object = props.object

  const title = object ? object.title : ""
  const material = object ? object.field_material : ""
  const site = object ? object.field_archeological_site : ""
  const commune = object ? object.field_commune : ""
  const province = object ? object.field_province : ""
  const code = object ? object.field_code : ""
  const objectImages = object ? object.relationships.field_image : []
  const video = object
    ? object.relationships.field_video.localFile.publicURL
    : ""

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Video videoSrcURL={video} />
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {objectImages.map((image, key) => {
              return (
                <Carousel.Item key={key}>
                  <Image src={image.localFile.publicURL} />
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
        </Modal.Footer>
      </Modal>
    </>
  )
}

/*const mapStateToProps = reducer => ({
  object: state.object,
})

const mapDispatchToProps = dispatch => ({
  functionDispatchName(obj) {
    dispatch({
      type: "ACTION_TYPE_NAME",
      obj,
    })
  },
})*/

export default ObjectComponent
//export default connect(mapStateToProps, mapDispatchToProps)(ObjectComponent)

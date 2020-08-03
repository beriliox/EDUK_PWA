import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import Video from "./video"
import cedulaJson from "../templates/cedula.json"

const CedulatModal = props => {
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const video = props.props.relationships.field_video.localFile.publicURL
    ? props.props.relationships.field_video.localFile.publicURL
    : ""

  const material = cedulaJson.field_material.find(
    (el, key) => key === props.props.field_material
  )

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Video videoSrcURL={video} />
        </Modal.Header>
        <Modal.Body>
          <div>{props.props.title}</div>
          <div>{material}</div>
          <div>{props.props.field_numero_inventario}</div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CedulatModal

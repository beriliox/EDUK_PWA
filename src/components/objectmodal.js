import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import Video from "./video"

const ObjectModal = props => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const video = props.props.relationships.field_video.localFile.publicURL
    ? props.props.relationships.field_video.localFile.publicURL
    : ""

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Video videoSrcURL={video} />
        </Modal.Header>
        <Modal.Body>
          <div>{props.props.title}</div>
          <div>{material}</div>
          <div>{props.props.field_code}</div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ObjectModal

import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import Video from "./video"
import objectJson from "../templates/object.json"

const ObjectModal = props => {
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false)

  const video = props.props.relationships.field_video.localFile.publicURL
    ? props.props.relationships.field_video.localFile.publicURL
    : ""

  const material = objectJson.field_material.find(
    (el, key) => key === props.props.field_material
  )

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
          <div>
            {props.props.field_resource_type.map((res, key) => {
              return <div key={key}>{objectJson.field_resource_type[res]}</div>
            })}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ObjectModal

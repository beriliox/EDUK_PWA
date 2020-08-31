import React from "react"
import { Modal } from "react-bootstrap"
import modalFooterStyles from "./modalfooter.module.scss"
import "./modalfooter.css"
import FotosItem from "./items/fotositem"
import Video3DItem from "./items/video3ditem"
import VideoItem from "./items/videoitem"
import MasInfoItem from "./items/masinfoitem"

const ModalFooter = ({ object }) => {
  const title = object ? object.title : ""
  const material = object ? object.field_material : ""
  const site = object ? object.field_sitio_arqueologico : ""
  const commune = object ? object.field_comuna : ""
  const province = object ? object.field_provincia : ""
  const code = object ? object.field_codigo : ""

  return (
    <Modal.Footer className={modalFooterStyles.modalContentFooter}>
      <div className={modalFooterStyles.objectInfoBlock}>
        <div className={modalFooterStyles.objectInfo}>
          <p className={modalFooterStyles.objectTitle}>{title}</p>
          <p>{material}</p>
          <p>{site}</p>
          <p>{`${commune}, ${province}`}</p>
          <p>{code}</p>
        </div>
      </div>
      <div className={modalFooterStyles.objectInfoBlock}>
        <div className={modalFooterStyles.objectInfoResources}>
          <FotosItem />
          <Video3DItem object={object} />
          <VideoItem object={object} />
          <MasInfoItem object={object} />
        </div>
      </div>
    </Modal.Footer>
  )
}

export default ModalFooter

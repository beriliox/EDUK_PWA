import React from "react"
import { connect } from "react-redux"
import { Image, Modal } from "react-bootstrap"
import objectGroupStyles from "./objectgroup.module.scss"
import TouchIcon from "../vitrina/touchicon"
import "./object.css"

const ObjectGroup = ({
  group,
  showGroup,
  toggleShowGroup,
  toggleObject,
  toggleGroup,
  toggleShow,
  toggleShowDefaultImage,
  toggleShow3D,
  toggleShowVideo,
  toggleShowMasInfo,
  toggleShowImage,
  toggleShowBody,
  toggleShowSelectVideo,
  toggleShowSelect3D,
  toggleShowSelectMasInfo,
  toggleShowSelectCedula,
  toggleShowControls,
}) => {
  const _onHide = showGroup => {
    toggleShowControls(true)
    toggleShowGroup(!showGroup)
  }

  const _showObject = obj => {
    toggleShowGroup(false)
    toggleGroup([])
    toggleObject(obj)
    toggleShow(true)

    /* Se muestra los datos de la cedula en su estado inicial por defecto */
    toggleShowDefaultImage(true)
    toggleShow3D(false)
    toggleShowVideo(false)
    toggleShowMasInfo(false)
    toggleShowImage(false)
    toggleShowBody(true)

    toggleShowSelectVideo("deselected")
    toggleShowSelect3D("deselected")
    toggleShowSelectMasInfo("deselected")
    toggleShowSelectCedula("selected")
    /**/
  }
  return (
    <>
      <Modal
        show={showGroup}
        onHide={() => _onHide(showGroup)}
        dialogClassName={objectGroupStyles.modalGroupDialog}
      >
        <Modal.Header className={objectGroupStyles.ModalHeader} closeButton>
          {group.map(obj => {
            const imagePath =
              obj.relationships.field_imagen[0].localFile.publicURL
            return (
              <Image
                src={imagePath}
                onClick={() => _showObject(obj)}
                className={objectGroupStyles.Img}
              />
            )
          })}
        </Modal.Header>
        <Modal.Body className={objectGroupStyles.MessageBlock}>
          <span>Selecciona un objeto</span>
          <TouchIcon />
        </Modal.Body>
      </Modal>
    </>
  )
}

const mapStateToProps = state => ({
  showGroup: state.app.showGroup,
})

const mapDispatchToProps = dispatch => ({
  toggleObject(obj) {
    dispatch({
      type: "TOGGLE_OBJECT",
      obj,
    })
  },
  toggleGroup(group) {
    dispatch({
      type: "TOGGLE_GROUP",
      group,
    })
  },
  toggleOnSelect(onSelect) {
    dispatch({
      type: "TOGGLE_ONSELECT",
      onSelect,
    })
  },
  toggleOnSelectGroup(onSelectGroup) {
    dispatch({
      type: "TOGGLE_ONSELECT_GROUP",
      onSelectGroup,
    })
  },
  toggleShow(show) {
    dispatch({
      type: "TOGGLE_SHOW",
      show,
    })
  },
  toggleShowControls(showControls) {
    dispatch({
      type: "TOGGLE_SHOW_CONTROLS",
      showControls,
    })
  },
  toggleShowGroup(showGroup) {
    dispatch({
      type: "TOGGLE_SHOW_OBJECT",
      showGroup,
    })
  },
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
  toggleShowSelectVideo(showSelectVideo) {
    dispatch({
      type: "TOGGLE_SHOWSELECT_VIDEO",
      showSelectVideo,
    })
  },
  toggleShowSelect3D(showSelect3D) {
    dispatch({
      type: "TOGGLE_SHOWSELECT_3D",
      showSelect3D,
    })
  },
  toggleShowSelectMasInfo(showSelectMasInfo) {
    dispatch({
      type: "TOGGLE_SHOWSELECT_MASINFO",
      showSelectMasInfo,
    })
  },
  toggleShowSelectCedula(showSelectCedula) {
    dispatch({
      type: "TOGGLE_SHOWSELECT_CEDULA",
      showSelectCedula,
    })
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(ObjectGroup)

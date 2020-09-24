import React from "react"
import { connect } from "react-redux"
import { Modal } from "react-bootstrap"
import objectStyles from "./object.module.scss"
import "./object.css"
import ModalHeader from "./modal/header/modalheader"
import ModalBody from "./modal/body/modalbody"
import ModalFooter from "./modal/footer/modalfooter"

const ObjectComponent = ({
  object,
  show,
  toggleShow,
  toggleShowControls,
  toggleSetGradient,
  toggleSetGradientClass,
}) => {
  const _onHide = show => {
    toggleShowControls(true)
    toggleShow(!show)
    toggleSetGradient({})
    toggleSetGradientClass("degradient")
  }
  return (
    <>
      <Modal
        show={show}
        onHide={() => _onHide(show)}
        dialogClassName={objectStyles.modalObjectDialog}
      >
        <ModalHeader object={object} />
        <ModalBody object={object} />
        <ModalFooter object={object} />
      </Modal>
    </>
  )
}

const mapStateToProps = state => ({
  show: state.app.show,
})

const mapDispatchToProps = dispatch => ({
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
  toggleSetGradient(setGradient) {
    dispatch({
      type: "TOGGLE_SET_GRADIENT",
      setGradient,
    })
  },
  toggleSetGradientClass(setGradientClass) {
    dispatch({
      type: "TOGGLE_SET_GRADIENT_CLASS",
      setGradientClass,
    })
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(ObjectComponent)

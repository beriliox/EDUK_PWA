import React from "react"
import { connect } from "react-redux"
import { Modal } from "react-bootstrap"
import objectStyles from "./object.module.scss"
import "./object.css"
import ModalHeader from "./modal/header/modalheader"
import ModalBody from "./modal/body/modalbody"
import ModalFooter from "./modal/footer/modalfooter"

const ObjectComponent = ({ object, show, toggleShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => toggleShow(!show)}
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
})
export default connect(mapStateToProps, mapDispatchToProps)(ObjectComponent)

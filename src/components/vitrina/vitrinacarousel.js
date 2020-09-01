import React from "react"
import { Carousel, Modal } from "react-bootstrap"
import { connect } from "react-redux"
import vitrinaStyles from "./vitrina.module.scss"
import "./vitrina.css"
import BackgroundCarousel from "./backgroundcarousel"
import TouchIcon from "./touchicon"
const VitrinaCarousel = ({ vitrinas, showHelp, onSelect, toggleShowHelp }) => {
  return (
    <Carousel
      key={Math.round(Math.random())}
      defaultActiveIndex={onSelect}
      interval={null}
    >
      {vitrinas.map((vitrina, key) => {
        const vitrinaObj = { vitrina, key }
        return (
          <Carousel.Item key={key}>
            <BackgroundCarousel props={vitrinaObj} />
            <Carousel.Caption className={vitrinaStyles.Modal}>
              <Modal
                show={showHelp}
                onHide={() => toggleShowHelp(!showHelp)}
                dialogClassName={vitrinaStyles.modalHelpDialog}
              >
                <Modal.Header className={vitrinaStyles.Help} closeButton>
                  <Modal.Title>
                    <TouchIcon />
                    <span className={vitrinaStyles.HelpMessage}>
                      Recorre la vitrina y seleccione objetos
                    </span>
                  </Modal.Title>
                </Modal.Header>
              </Modal>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

const mapStateToProps = state => ({
  showHelp: state.app.showHelp,
  onSelect: state.app.onSelect,
})

const mapDispatchToProps = dispatch => ({
  toggleShowHelp(showHelp) {
    dispatch({
      type: "TOGGLE_SHOWHELP",
      showHelp,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VitrinaCarousel)

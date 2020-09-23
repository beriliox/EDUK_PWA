import React from "react"
import { Carousel, Modal } from "react-bootstrap"
import { connect } from "react-redux"
import { useIdleTimer } from "react-idle-timer"
import vitrinaStyles from "./vitrina.module.scss"
import "./vitrina.css"
import BackgroundCarousel from "./backgroundcarousel"
import HandIcon from "../../assets/hand-icon.svg"
const VitrinaCarousel = ({
  vitrinas,
  showHelp,
  onSelect,
  toggleShowHelp,
  showControls,
}) => {
  const handleOnIdle = event => {
    //console.log("user is idle", event)
    //console.log("last active", getLastActiveTime())
    toggleShowHelp(true)
  }

  const handleOnActive = event => {
    //console.log("user is active", event)
    //console.log("time remaining", getRemainingTime())
  }

  const handleOnAction = e => {
    //console.log("user did something", e)
  }

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * 15,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500,
  })

  return (
    <Carousel
      key={Math.round(Math.random())}
      defaultActiveIndex={onSelect}
      interval={null}
      controls={showControls}
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
                  <Modal.Title className={vitrinaStyles.ModalTitle}>
                    <HandIcon className={BackgroundCarousel.Icon} />
                    <span className={vitrinaStyles.HelpMessage}>
                      Recorre la vitrina y selecciona objetos
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
  showControls: state.app.showControls,
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

import React from "react"
import { connect } from "react-redux"
import vitrinaStyles from "./vitrina.module.scss"
import "./vitrina.css"

const BackgroundCarousel = ({
  props,
  toggleOnSelect,
  toggleObject,
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
}) => {
  const vitrina = props.vitrina
  const keyID = props.key
  const _showObject = (obj, key) => {
    toggleOnSelect(key)
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
  const _showCoords = e => {
    let x = e.nativeEvent.offsetX
    let y = e.nativeEvent.offsetY
    console.log(x, y)
  }
  return (
    <div
      width="800"
      height="1280"
      onClick={e => _showCoords(e)}
      style={{
        backgroundImage: `
              url(${vitrina.relationships.field_imagen_vitrina.localFile.publicURL}),
              linear-gradient(rgba(0,0,0,50%), white, white)
            `,
      }}
    >
      <svg width="800" height="1280">
        {vitrina.relationships.node__objeto.map(obj => {
          return obj.field_coords.map((coord, k) => {
            let cx = parseInt(coord.split(",")[0])
            let cy = parseInt(coord.split(",")[1])
            let cr = parseInt(coord.split(",")[2])
              ? parseInt(coord.split(",")[2])
              : 10
            return (
              <circle
                key={k}
                onClick={() => _showObject(obj, keyID)}
                cx={cx}
                cy={cy}
                r={cr}
                className={vitrinaStyles.circle}
              ></circle>
            )
          })
        })}
      </svg>
    </div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  toggleObject(obj) {
    dispatch({
      type: "TOGGLE_OBJECT",
      obj,
    })
  },
  toggleOnSelect(onSelect) {
    dispatch({
      type: "TOGGLE_ONSELECT",
      onSelect,
    })
  },
  toggleShow(show) {
    dispatch({
      type: "TOGGLE_SHOW",
      show,
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

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundCarousel)

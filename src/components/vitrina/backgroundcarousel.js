import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { connect } from "react-redux"
import vitrinaStyles from "./vitrina.module.scss"
import "./vitrina.css"

const BackgroundCarousel = ({
  props,
  toggleOnSelect,
  toggleOnSelectGroup,
  toggleObject,
  toggleGroup,
  toggleShow,
  toggleShowGroup,
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
  setGradient,
  toggleSetGradient,
  toggleSetGradientClass,
  setGradientClass,
}) => {
  const query = useStaticQuery(graphql`
    query {
      degrantImage: file(relativePath: { eq: "gradient.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const gradient = query.degrantImage.childImageSharp.fluid
  const vitrina = props.vitrina
  const keyID = props.key
  const _showGroup = (group, key) => {
    toggleShowControls(false)
    toggleOnSelectGroup(key)
    toggleGroup(group)
    toggleShowGroup(true)
    toggleSetGradient(gradient)
    toggleSetGradientClass("gradient")
  }
  const _showObject = (obj, key) => {
    toggleShowControls(false)
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
    toggleSetGradient(gradient)
    toggleSetGradientClass("gradient")
    /**/
  }
  const _showCoords = e => {
    let x = e.nativeEvent.offsetX
    let y = e.nativeEvent.offsetY
    console.log(x, y)
  }

  const grupos = vitrina.relationships.node__grupo
    ? vitrina.relationships.node__grupo
    : []

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
      <BackgroundImage className={setGradientClass} fluid={setGradient}>
        <svg width="800" height="1280">
          {grupos.map(grupo => {
            const objetoGroups = grupo.relationships.node__objeto
              ? grupo.relationships.node__objeto
              : []
            const objetoGroupsLength = objetoGroups.length
            return grupo.field_coords.map(coord => {
              let cx = parseInt(coord.split(",")[0])
              let cy = parseInt(coord.split(",")[1])
              let cr = parseInt(coord.split(",")[2])
                ? parseInt(coord.split(",")[2])
                : 10
              return objetoGroups.map((obj, k) => {
                if (objetoGroupsLength === 1) {
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
                }
                if (objetoGroupsLength > 1) {
                  return (
                    <circle
                      key={k}
                      onClick={() => _showGroup(objetoGroups, keyID)}
                      cx={cx}
                      cy={cy}
                      r={cr}
                      className={vitrinaStyles.circle}
                    ></circle>
                  )
                }
              })
            })
          })}
        </svg>
      </BackgroundImage>
    </div>
  )
}

const mapStateToProps = state => ({
  setGradient: state.app.setGradient,
  setGradientClass: state.app.setGradientClass,
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

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundCarousel)

import React from "react"
import Layout from "../layout"
import { connect } from "react-redux"
import ObjectComponent from "../object/object"
import ObjectGroup from "../object/objectgroup"
import VitrinaCarousel from "../vitrina/vitrinacarousel"

const Tablet = ({ object, group, vitrinas }) => {
  return (
    <Layout key={Math.round(Math.random())}>
      <VitrinaCarousel vitrinas={vitrinas} />
      <ObjectComponent object={object} />
      <ObjectGroup group={group} />
    </Layout>
  )
}

const mapStateToProps = state => ({
  object: state.app.obj,
  group: state.app.group,
})

export default connect(mapStateToProps, null)(Tablet)

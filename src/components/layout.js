/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer";
import "./layout.css"
import "../styles/background-image.css"

import styles from "../styles/styles.module.scss";

const Layout = ({ children }) => {

  return (
    <div className={styles.gradient}>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
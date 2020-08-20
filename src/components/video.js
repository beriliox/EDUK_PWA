import React from "react"
import videoStyles from "./video.module.scss"

const Video = ({ videoSrcURL }) => (
  <div className={videoStyles.videoModal}>
    <iframe
      src={videoSrcURL}
      title="Default title"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      width="100%"
      height="440"
    />
  </div>
)
export default Video

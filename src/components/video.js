import React from "react"
import videoStyles from "./video.module.scss"

const Video = ({ videoSrcURL }) => (
  <div className={videoStyles.videoModal}>
    <video width="100%" height="390" loop="true" autoPlay="true">
      <source src={videoSrcURL} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
)
export default Video

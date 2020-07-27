import React from "react"
const Video = ({ videoSrcURL }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title='Default title'
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="700"
      height="440"
    />
  </div>
)
export default Video
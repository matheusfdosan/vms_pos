import React from "react"
import "./styles.css"
import loading from "../../assets/loading-loading-forever.gif"

function Loading() {
  return <>
  <div id="loading">
    <img src={loading} alt="loading" />
  </div>
  </>
}

export default Loading
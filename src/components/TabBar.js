import React from "react"
import { Link } from "react-router-dom"

export default class TabBar extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          padding: 10,
          border: "solid 1px black"
        }}
      >
        <Link to="/dashboard">Försäkring</Link>
        <Link to="/profile">Profil</Link>
      </div>
    )
  }
}

import React from "react"

import Carousel from "../Carousel"

export default class PerilDetails extends React.Component {
  render() {
    return (
      <Carousel
        items={this.props.category.perils}
        initialIndex={this.props.initialPerilIndex}
        renderItem={({
          item: peril,
          canGoLeft,
          canGoRight,
          changeSelectedIndex
        }) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div>{peril.title}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%"
                }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => changeSelectedIndex(-1)}
                >
                  &lt;
                </div>
                <img
                  style={{ height: 184, width: 184, objectFit: "cover" }}
                  src={peril.imageUrl}
                  alt={peril.title}
                />
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => changeSelectedIndex(1)}
                >
                  &gt;
                </div>
              </div>
              <div>{peril.description}</div>
            </div>
          )
        }}
      />
    )
  }
}

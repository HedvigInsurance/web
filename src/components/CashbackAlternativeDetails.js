import React from "react"

import Carousel from "./Carousel"

export default class CashbackAlternativeDetails extends React.Component {
  cta(cashbackAlternative) {
    if (cashbackAlternative.selected) {
      return <div>SELECTED</div>
    } else {
      return (
        <button onClick={() => this.props.updateCashback(cashbackAlternative)}>
          CHANGE TO THIS
        </button>
      )
    }
  }

  render() {
    return (
      <Carousel
        items={this.props.cashbackAlternatives}
        initialIndex={this.props.initialCashbackIndex || 0}
        renderItem={({
          item: cashbackAlternative,
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
              <div>{cashbackAlternative.title}</div>
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
                  src={cashbackAlternative.imageUrl}
                  alt={cashbackAlternative.title}
                />
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => changeSelectedIndex(1)}
                >
                  &gt;
                </div>
              </div>
              <div>{cashbackAlternative.description}</div>
              {this.cta(cashbackAlternative)}
            </div>
          )
        }}
      />
    )
  }
}

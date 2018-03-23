import React from "react"

export default class Carousel extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0
    }
  }

  changeSelectedIndex(delta) {
    let nextIndex = this.state.selectedIndex + delta
    if (nextIndex >= 0 && nextIndex < this.props.items.length) {
      this.setState({
        selectedIndex: nextIndex
      })
    }
  }

  componentDidMount() {
    if (this.props.initialIndex) {
      this.setState({ selectedIndex: this.props.initialIndex })
    }
  }

  canGoLeft() {
    return this.selectedIndex > 0
  }

  canGoRight() {
    return this.selectedIndex < this.props.items.length - 1
  }

  render() {
    let item = this.props.items[this.state.selectedIndex]

    return (
      <div>
        {this.props.renderItem({
          item,
          canGoLeft: this.canGoLeft.bind(this),
          canGoRight: this.canGoRight.bind(this),
          changeSelectedIndex: this.changeSelectedIndex.bind(this)
        })}
      </div>
    )
  }
}

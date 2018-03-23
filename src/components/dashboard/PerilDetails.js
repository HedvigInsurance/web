import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border-bottom: solid 1px ${props => props.theme.colors.lightGray};
  padding: 32px 32px 56px 32px;
  text-align: left;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  font-family: "Merriweather";
  font-size: 20px;
  margin-bottom: 16px;
`

export default class PerilDetails extends React.Component {
  render() {
    let peril = this.props.category.perils[this.props.initialPerilIndex]
    return (
      <Container>
        <Header>
          <Title>{peril.title}</Title>
          <div style={{ cursor: "pointer" }} onClick={() => this.props.close()}>
            <img src="/assets/icons/close/close_black.svg" alt="cross" />
          </div>
        </Header>
        <div>{peril.description}</div>
      </Container>
    )
  }
}

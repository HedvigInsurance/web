import styled from "styled-components"

export const DialogContainerStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 200px;
  justify-content: space-between;
`

export const DialogTitleStyle = styled.div`
  font-family: "Merriweather";
  font-size: 24px;
  margin-top: 34px;
  color: ${props => props.theme.colors.black};
`

export const DialogParagraphStyle = styled.div`
  font-size: 16px;
  max-width: 300px;
  align-self: center;
  color: ${props => props.theme.colors.black};
`

export const DialogButtonsContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DialogButtonStyle = styled.div`
  cursor: pointer;
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px ${props => props.theme.colors.lightGray};
  border-right: solid ${props => (props.position === "left" ? "1px" : "0px")}
    ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.purple};
`

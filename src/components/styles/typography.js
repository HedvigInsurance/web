import styled from "styled-components"

export const Heading2 = styled.span`
  font-family: "Merriweather";
  color: ${props => props.theme.colors.webHeading};
  font-size: 28px;
  line-height: 38px;

  @media (min-width: 800px) {
    font-size: 40px;
    line-height: 56px;
  }
`

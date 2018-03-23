import styled, { keyframes } from "styled-components"

const slideFromLeft = keyframes`
  from {
    transform: translate(-100px, 0px);
    animation-timing-function: ease;
  }

  to {
    transform: translate(0px, 0px)
  }
`

export const StyledUserMessage = styled.div`
  font-family: "Circular Std Book";
  background-color: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  border-radius: 24px;
  padding: 8px 12px;
  font-size: 16px;
  word-break: break-word;

  @media (min-width: 800px) {
    padding: 12px 15px;
    font-size: 20px;
  }
`

export const StyledMessage = styled.div`
  font-family: "Merriweather";
  background-color: ${props => props.theme.colors.hedvigMessageBackground};
  color: ${props => props.theme.colors.blackPurple};
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 16px;
  word-break: break-word;
  animation: 0.5s ${slideFromLeft} 1;

  @media (min-width: 800px) {
    padding: 12px 15px;
    font-size: 20px;
  }
`

export const MessageContainerStyled = styled.div`
  background-size: 16px 22px;
  background-position: bottom 15px left;
  background-repeat: no-repeat;
  max-width: 80%;
`

export const OptionsContainerStyled = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const WrappedOptionsContainerStyled = OptionsContainerStyled.extend`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;

  > * {
    &:first-child {
      margin-left: 0px;
    }
    margin-left: 10px;
  }
`

export const StyledOptionContainer = styled.div`
  margin-bottom: 8px;
`

export const ChatAreaStyled = styled.div`
  width: 100%;
  align-self: center;
  overscroll-behaviour-y: none;
  overflow: hidden;

  padding: 5px;
  margin: 62px 0 0;

  @media (min-width: 800px) {
    margin: 72px 0 0;
    max-width: 1200px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
  }
`

export const MessageAreaStyled = styled.div`
  min-height: 100px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1;
  /* Enable momentum scrolling on iOS */
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`

export const InputAreaStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
  ${"" /* margin-bottom: 117px; */};
`

export const TextInputStyled = styled.input`
  font-family: "Circular Std Book";
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${props => props.theme.colors.darkGray};
  border-radius: 24px;
  outline: none;
  color: ${props => props.theme.colors.black};
  padding: 7px 20px;
  appearance: none;
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

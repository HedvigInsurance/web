import * as React from "react"
import styled from "react-emotion"
import { Container, ActionMap } from "constate"

import { Title } from "./title"
import { Player } from "./player"
import { CloseButton } from "./close-button";

const HeroContainer = styled("div")({
    width: "100%",
    overflow: "hidden",
    position: "relative"
})

interface ShadowProps {
    hidden: boolean
}

const Shadow = styled("div")({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "opacity 1000ms"
}, ({ hidden }: ShadowProps) => ({
    opacity: hidden ? 0 : 1
}))

interface State {
    isFullScreen: boolean
}

interface Actions {
    setFullScreen: (isFullScreen: boolean) => void
}

const actions: ActionMap<State, Actions> = {
    setFullScreen: isFullScreen => () => ({
        isFullScreen
    })
}


export const Hero = () =>
    <Container actions={actions} initialState={{ isFullScreen: false }}>
        {({ isFullScreen, setFullScreen }) => (
            <HeroContainer>
                <Player isFullScreen={isFullScreen} />
                <Shadow hidden={isFullScreen}>
                    <Title clickedPlayButton={() => setFullScreen(true)} />
                </Shadow>
                <CloseButton onClick={() => setFullScreen(false)} hidden={!isFullScreen} />
            </HeroContainer>
        )}
    </Container>

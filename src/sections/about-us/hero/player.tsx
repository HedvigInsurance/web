import * as React from "react"
import styled, { keyframes } from "react-emotion"
import heroVideo from "assets/about-us-hero.mp4"

const fadeInKeyframe = keyframes({
    from: {
        opacity: 0
    },
    to: {
        opacity: 1
    }
})

interface PlayerProps {
    isFullScreen: boolean
}

const Video = styled("video")({
    width: "100%",
    objectFit: "cover",
    animation: `${fadeInKeyframe} 2000ms forwards`,
    transition: "height 1500ms",
    height: 600,
    "@media (max-width: 1100px)": {
        height: 700
    }
}, ({ isFullScreen }: PlayerProps) => ({
    height: isFullScreen ? "calc(100vh - 70px)" : 600,
    "@media (max-width: 1100px)": {
        height: isFullScreen ? "calc(100vh - 70px)" : 700
    }
}))

const restartVideo = (event: React.SyntheticEvent) => {
    const video = event.nativeEvent.target as HTMLVideoElement

    if (video.volume === 1) {
        video.pause();
        video.currentTime = 0;
        video.play();
    }
}

export const Player: React.SFC<PlayerProps> = ({ isFullScreen }) =>
    <Video onVolumeChange={restartVideo} autoPlay muted={!isFullScreen} loop={!isFullScreen} isFullScreen={isFullScreen}>
        <source src={heroVideo} type="video/mp4" />
    </Video>

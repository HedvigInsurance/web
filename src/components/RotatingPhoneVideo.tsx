import * as React from 'react'
import styled from 'react-emotion'

const Video = styled('video')({
  maxWidth: '100%',
})

const baseVideoUrl =
  'https://s3.eu-central-1.amazonaws.com/www.hedvig.com/rotating-phone-video'

const RotatingPhoneVideo: React.SFC = () => (
  <Video autoPlay loop>
    <source
      src={`${baseVideoUrl}/hedvig_rotating_phone.m3u8`}
      type="application/vnd.apple.mpegurl"
    />
    <source src={`${baseVideoUrl}/web.mp4`} />
    <source src={`${baseVideoUrl}/web.webm`} />
  </Video>
)

export { RotatingPhoneVideo }
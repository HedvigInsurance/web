import * as React from 'react'
import styled from 'react-emotion'
import { colors } from '@hedviginsurance/brand';

interface JoinBannerProps {
}

const Background = styled('div')({
  backgroundColor: colors.GREEN
})
const Container = styled('div')({
  width: 1200,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',

})

const JoinBanner: React.SFC<JoinBannerProps> = () => (
  <Background>
    <Container>
      <div>
        Join us!
      </div>
      <div>
        <a href="https://join.hedvig.com">Join hedvig</a>
      </div>
    </Container>
  </Background>
)

export { JoinBanner }

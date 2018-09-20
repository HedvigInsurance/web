import { colors, fonts } from '@hedviginsurance/brand'
import * as React from 'react'
import styled from 'react-emotion'

import { Markdown } from 'src/cms/utils/markdown'
import { PressItem } from './press-item'

const Background = styled('div')({
  backgroundColor: '#F9FAFC',
})

const PressContainer = styled('div')({
  padding: '70px 0',
  width: '80%',
  margin: '0 auto',
  maxWidth: 700,
})

const Title = styled('h3')({
  fontSize: 60,
  lineHeight: '65px',
  fontFamily: fonts.SORAY,
  marginBottom: 40,
  '@media (max-width: 650px)': {
    fontSize: 45,
    lineHeight: '50px',
  },
})

const Footnote = styled('span')({
  display: 'block',
  fontSize: 18,
  lineHeight: '24px',
  marginTop: 40,
  textAlign: 'center',
})

const Link = styled('a')({
  color: colors.PURPLE,
})

export interface PressItem {
  logo: string
  title: string
  text: string
  link: string
}

interface PressProps {
  items: PressItem[]
  footnote: string
  title: string
}

export const Press: React.SFC<PressProps> = ({ title, items, footnote }) => (
  <Background>
    <PressContainer>
      <Title>{title}</Title>
      {items.map(({ logo, title: pressItemTitle, text, link }) => (
        <PressItem
          key={link}
          link={link}
          title={pressItemTitle}
          logo={logo}
          text={text}
        />
      ))}
      <Footnote>
        <Markdown
          renderers={{
            link: Link,
          }}
          source={footnote}
        />
      </Footnote>
    </PressContainer>
  </Background>
)

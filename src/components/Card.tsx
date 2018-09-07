import styled from 'react-emotion'
import { colors } from '@hedviginsurance/brand'

const Card = styled('div')({
  backgroundColor: colors.WHITE,
  borderRadius: 16,
  boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);',
  overflow: 'hidden'
})

const CardHeader = styled('div')({
  borderBottom: `1px solid ${colors.OFF_WHITE}`,
  paddingBottom: 20,
  padding: 20
})

const CardBody = styled('div')({
  margin: 10
})

export { Card, CardHeader, CardBody }

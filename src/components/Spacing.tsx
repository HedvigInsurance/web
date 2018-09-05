import styled from 'react-emotion'

interface SpacingProps {
  width: number,
  height: number,
}

const Spacing = styled('div')({}, ({ width, height }: SpacingProps) => ({
  width: width || 1, height: height || 1
}))

export { Spacing }

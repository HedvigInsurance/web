import styled from 'react-emotion';

interface SpacingProps {
  width?: number | string;
  height?: number | string;
}

const Spacing = styled('div')(({ width = 1, height = 1 }: SpacingProps) => ({
  width,
  height,
}));

export { Spacing };

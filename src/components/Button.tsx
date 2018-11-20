import { colors } from '@hedviginsurance/brand';
import styled from 'react-emotion';

const buttonSizes = {
  sm: '10px 20px',
  md: '15px 40px',
};

interface ButtonProps {
  size?: keyof typeof buttonSizes;
}

const Button = styled('button')(({ size = 'md' }: ButtonProps) => ({
  backgroundColor: colors.GREEN,
  padding: buttonSizes[size],
  borderRadius: 30,
  color: colors.WHITE,
  cursor: 'pointer',
}));

export { Button };

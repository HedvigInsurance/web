import React from 'react';
import styled from 'react-emotion';
import { colors } from '@hedviginsurance/brand';

const BadgeStyle = styled('span')({
  backgroundColor: colors.LIGHT_GRAY,
  color: colors.DARK_GRAY,
  borderRadius: 16,
  padding: '4px 10px',
  marginRight: 12,
  fontSize: 12,
});

const Badge = ({ children }) => <BadgeStyle>{children}</BadgeStyle>;

export { Badge };

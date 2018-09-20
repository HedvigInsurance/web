import * as React from 'react';
import styled from 'react-emotion';
import GatsbyLink from 'gatsby-link';

interface BreadcrumbProps {
  to?: string;
}

const BreadcrumbComponent = styled('li')({
  display: 'inline-block',
  fontSize: 16,
  '&:not(:first-of-type):before': {
    content: '"\\203A"', // rsaquo
    display: 'inline-block',
    padding: '0 10px',
  },
});

const PlainBreadcrumb = styled('span')({});

const Breadcrumb: React.SFC<BreadcrumbProps> = ({ to, children }) => (
  <BreadcrumbComponent>
    {to ? (
      <GatsbyLink to={to}>{children}</GatsbyLink>
    ) : (
      <PlainBreadcrumb>{children}</PlainBreadcrumb>
    )}
  </BreadcrumbComponent>
);

const Breadcrumbs = styled('ul')({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export { Breadcrumbs, Breadcrumb };

import * as React from 'react';
import styled from 'react-emotion';

interface BreadcrumbProps {
  href?: string;
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

const Breadcrumb: React.SFC<BreadcrumbProps> = ({ href, children }) => (
  <BreadcrumbComponent>
    {href ? (
      <a href={href}>{children}</a>
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

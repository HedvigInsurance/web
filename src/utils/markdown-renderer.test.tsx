import * as React from 'react';
import { mount } from 'enzyme';
import remark from 'remark';
import remarkHtml from 'remark-html';
import { renderMarkdownToReactComponent } from './markdown-renderer';

it('renders standard markdown', () => {
  const markdown = `
# Hello world

heya!`;

  const wrapper = mount(renderMarkdownToReactComponent()(markdown));

  expect(wrapper.containsMatchingElement(<h1>Hello world</h1>)).toBe(true);
  expect(wrapper.containsMatchingElement(<p>heya!</p>)).toBe(true);
});

it('renders markdown with <br> tags', () => {
  const markdown = `foo<br /><br />`;

  const wrapper = mount(renderMarkdownToReactComponent()(markdown));

  expect(
    wrapper.containsMatchingElement(
      <p>
        foo
        <br />
        <br />
      </p>,
    ),
  ).toBe(true);
});

it("doesn't render script tags in markdown", () => {
  const markdown = `<script>/* evil code */</script>`;

  const wrapper = mount(renderMarkdownToReactComponent()(markdown));

  expect(wrapper.find('script')).toHaveLength(0);
});

it('renders custom components', () => {
  const markdown = `Hello world`;
  const AParagraph: React.SFC = ({ children }) => <span>{children}</span>;

  const wrapper = mount(
    renderMarkdownToReactComponent({ p: AParagraph })(markdown),
  );

  expect(wrapper.find(AParagraph)).toHaveLength(1);
});

it('renders weird characters', () => {
  const markdown = `While other tech teams live in the year 2018, the Hedvig tech team lives in the year 3018 👌 `;

  const wrapper = mount(renderMarkdownToReactComponent()(markdown));
  expect(wrapper.containsMatchingElement(<p>{markdown}</p>)).toBe(true);
});

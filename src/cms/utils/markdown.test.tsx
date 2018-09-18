import * as React from 'react';
import { mount } from 'enzyme';
import { Markdown } from './markdown';

it('renders markdown like it should', () => {
  const markdown = `
# Hello world

heya!`;

  const wrapper = mount(<Markdown source={markdown} />);

  expect(wrapper.containsMatchingElement(<h1>Hello world</h1>)).toBe(true);
  expect(wrapper.containsMatchingElement(<p>heya!</p>)).toBe(true);
});

it('renders markdown with <br> tags', () => {
  const markdown = `foo<br /><br />`;

  const wrapper = mount(<Markdown source={markdown} />);

  expect(wrapper.find('br')).toHaveLength(2);
});

it("doesn't render script tags in markdown", () => {
  const markdown = `<script>/* evil code */</script>`;

  const wrapper = mount(<Markdown source={markdown} />);

  expect(wrapper.find('script')).toHaveLength(0);
});

it('renders custom components', () => {
  const markdown = `Hello world`;
  const AParagraph: React.SFC = ({ children }) => <p>{children}</p>;

  const wrapper = mount(
    <Markdown renderers={{ paragraph: AParagraph }} source={markdown} />,
  );

  expect(wrapper.find(AParagraph)).toHaveLength(1);
});

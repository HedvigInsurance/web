const { pipe, filter, map, replace } = require('ramda');
const kebabCase = require('just-kebab-case');

const kebabCaseTag = pipe(
  kebabCase,
  replace(/^-+/, ''),
  replace(/-+$/, ''),
);

const kebabCaseTags = pipe(
  filter(Boolean),
  map(kebabCaseTag),
  filter(Boolean),
);

module.exports = { kebabCaseTag, kebabCaseTags };

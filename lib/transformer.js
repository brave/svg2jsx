const camelCase = require('lodash.camelcase');
const cloneDeep = require('lodash.clonedeep');
const reactifyStyle = require('css-to-react-native').default;

const { parseStyle } = require('./parser');

/**
 * Custom attributes.
 *
 * @readonly
 * @enum {string}
 */
const customAttributes = {
  class: 'className',
};

/**
 * Apply transforms to SVG styles.
 *
 * @param {string} style Stylesheet.
 * @returns {string}
 */
const transformStyle = (style) => {
  const parsed = parseStyle(style);
  const transformed = reactifyStyle(parsed);

  return transformed;
};

/**
 * Apply transforms to SVG tree and stringify.
 *
 * @param {Object} node The SVG parent node.
 * @returns {string}
 */
const transform = (node) => {
  const clonedNode = cloneDeep(node);
  const attributeNames = Object.keys(node.attributes);

  clonedNode.attributes = attributeNames.reduce((accumulator, attribute) => {
    const value = clonedNode.attributes[attribute];

    const isStyleAttribute = attribute === 'style';
    const isDataAttribute = attribute.startsWith('data-');

    if (isDataAttribute) {
      return {
        ...accumulator,
        [attribute]: value,
      };
    }
    if (isStyleAttribute) {
      return {
        ...accumulator,
        [attribute]: transformStyle(value),
      };
    }
    if (customAttributes[attribute]) {
      return {
        ...accumulator,
        [customAttributes[attribute]]: value,
      };
    }
    return {
      ...accumulator,
      [camelCase(attribute)]: value,
    };
  }, {});

  if (clonedNode.children) {
    clonedNode.children = clonedNode.children.map(transform);
  }

  return clonedNode;
};

module.exports = transform;

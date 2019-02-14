const camelCase = require('lodash.camelcase');
const cloneDeep = require('lodash.clonedeep');
const reactifyStyle = require('css-to-react-native').default;

const { parseStyle } = require('./parser');

/**
 * Custom attributes.
 *
 * @constant
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
  const transformed = {};
  const clone = cloneDeep(node);
  const attributes = Object.keys(node.attributes);

  attributes.forEach((attribute) => {
    const value = clone.attributes[attribute];
    const dataAttribute = attribute.startsWith('data-');
    const styleAttribute = attribute === 'style';
    const customAttribute = customAttributes[attribute];

    transformed[camelCase(attribute)] = value;

    if (dataAttribute) {
      transformed[attribute] = dataAttribute;
    }
    if (styleAttribute) {
      transformed[attribute] = transformStyle(value);
    }
    if (customAttribute) {
      transformed[customAttribute] = value;
    }
  });

  clone.attributes = transformed;

  if (clone.children) {
    clone.children.forEach((children, index) => {
      clone.children[index] = transform(children);
    });
  }

  return clone;
};

module.exports = transform;

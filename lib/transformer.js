const camelCase = require('lodash.camelcase');
const reactifyStyle = require('css-to-react-native').default;

const { parseStyle } = require('./parser');

/**
 * Apply transforms to SVG styles.
 *
 * @param {string} style Stylesheet.
 * @returns {string}
 */
const transformStyle = (style) => {};

/**
 * Apply transforms to SVG tree and stringify.
 *
 * @param {Object} tree The SVG tree.
 * @returns {string}
 */
const transform = (tree) => {};

module.exports = transform;

const parser = require('svg-parser');

/**
 * Parse styles.
 *
 * @param {string} style Stylesheet.
 * @return {Object}
 */
const parseStyle = (style) => {};

/**
 * Parse SVG string into tree data.
 *
 * @param {string} svg The SVG string.
 * @returns {Object}
 */
const parse = (svg) => parser.parse(svg);

module.exports = {
  parse,
  parseStyle,
};

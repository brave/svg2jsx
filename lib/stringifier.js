const plainObject = require('lodash.isplainobject');

/**
 * Stringify style.
 *
 * @param {Array} style Style data.
 * @returns {string}
 */
const stringifyStyle = (style = {}) => {};

/**
 * Stringify attributes.
 *
 * @param {Object} attrs Node attributes data.
 * @returns {string}
 */
const stringifyAttributes = (attrs = {}) => {};

/**
 * Stringify node.
 *
 * @param {Object} node The SVG node.
 * @param {string} buffer SVG string buffer.
 * @returns {string}
 */
const stringifyNode = (node, buffer) => {};

/**
 * Stringify SVG tree.
 *
 * @param {Object} node The SVG tree.
 * @returns {string}
 */
const stringify = (node) => {};

module.exports = stringify;

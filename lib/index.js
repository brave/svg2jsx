const clean = require('./cleaner');
const stringify = require('./stringifier');
const transform = require('./transformer');
const format = require('./formatter');
const { parse } = require('./parser');

/**
 * Clean-up and transform SVG into valid JSX.
 *
 * @param {string} svg The SVG string.
 * @param {Object} formatOptions The prettier config.
 * @returns {string}
 */
const morpheus = async (svg, formatOptions = {}) => {
  const cleaned = await clean(svg);
  const parsed = parse(cleaned);
  const transformed = transform(parsed);
  const morphed = stringify(transformed, formatOptions);
  const formatted = format(morphed);

  return formatted;
};

module.exports = morpheus;

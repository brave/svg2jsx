const clean = require('./cleaner');
const stringify = require('./stringifier');
const transform = require('./transformer');
const { parse } = require('./parser');

/**
 * Clean-up and transform SVG into valid JSX.
 *
 * @param {string} svg The SVG string.
 * @returns {string}
 */
const morpheus = async (svg) => {
  const cleaned = await clean(svg);
  const parsed = parse(cleaned);
  const transformed = transform(parsed);
  const morphed = stringify(transformed);

  return morphed;
};

module.exports = morpheus;

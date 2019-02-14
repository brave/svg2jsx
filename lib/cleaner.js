const Svgo = require('svgo');

/**
 * Create SVGO instance.
 */
const cleaner = new Svgo({
  plugins: [
    { removeScriptElement: true },
    { removeStyleElement: true },
    { convertShapeToPath: false },
    { removeHiddenElems: false },
    { convertPathData: false },
    { mergePaths: false },
    { cleanupIDs: false },
    { removeTitle: true },
    { removeDesc: true },
  ],
});

/**
 * Clean and optimize SVG.
 *
 * @param {string} svg The SVG string.
 */
const clean = async (svg) => {
  try {
    const { data } = await cleaner.optimize(svg);
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = clean;

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
const clean = (svg) => cleaner.optimize(svg);

module.exports = clean;

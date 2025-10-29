// Insert the SVG icon sprite into preview templates
// while removing the parent <div>, since it contains
// a non-React-compatible style tag

const sprite = `{% svgsprite %}`;

const parser = new DOMParser();
const spriteParsed = parser.parseFromString(sprite, 'text/html');

const spriteSvg = `${% include "partials/filters.svg" %}}${spriteParsed.querySelector('div').innerHTML}`;
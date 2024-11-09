'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};
  const declarations = sourceString
    .split(';')
    .filter((style) => style.length !== 0);

  declarations.forEach((style) => {
    const [property, value] = style.split(':').map((str) => str.trim());

    if (property && value) {
      newObject[property] = value;
    }
  });

  return newObject;
}

module.exports = convertToObject;

/**
 * Generates random id
 * @return {number}
 */
export function uuid(): number {
  return Math.floor(Math.random() * (Date.now() - 1)) + 1;
}

/**
 * Simple is object check.
 * @param item {Object<any>}
 * @returns {boolean}
 */
export function isObject(item): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

/**
 * Deep merge objects.
 * @param sources {Array<Object<any>>}
 * @returns {Object<any>}
 */
export function mergeDeep(...sources) {
  const target = {};
  if (!sources.length) {
    return target;
  }

  while (sources.length > 0) {
    const source = sources.shift();
    if (isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          target[key] = mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
  }
  return target;
}

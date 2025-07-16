/**
 * Deep clone an object using structured clone algorithm if available, otherwise use JSON.parse and JSON.stringify
 *
 * @param object - The object to be cloned
 * @returns The deep cloned object
 */
export const deepClone = (object: Record<string, unknown>) => {
  if (typeof object === 'object') {
    if (typeof structuredClone === 'function') {
      return structuredClone(object);
    } else {
      return JSON.parse(JSON.stringify(object));
    }
  }
  return {};
};

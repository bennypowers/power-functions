/** Returns a property by key name. */
// prop :: str -> obj -> a
export const prop = p => o => o && o[p];

/** Returns a property by array of deep key names. */
// deepProp :: str -> obj -> a
export const deepProp = propertyName => o =>
  propertyName
    .reduce((a, b) => a[b], o);

import { safeArrayMethod } from './safeArrayMethod.js';
import { compose } from './compose.js';

/** Point-free array concat. Naive implementation. */
// concat :: f -> as -> as
export const concat = safeArrayMethod('concat');

/** Point-free array filter. Naive implementation. */
// filter :: f -> as -> a
export const filter = safeArrayMethod('filter');

/** Point-free array find. Naive implementation. */
// find :: f -> as -> a
export const find = safeArrayMethod('find');

/** Point-free array map. Naive implementation. */
// map :: f -> as -> a
export const map = safeArrayMethod('map');

/** Point-free array reduce. Naive implementation. */
// reduce :: f -> as -> a
export const reduce = safeArrayMethod('reduce');

/** Point-free array some. Naive implementation. */
// some :: f -> as -> bool
export const some = safeArrayMethod('some');

/** Point-free array sort. Naive implementation. */
// sort :: f -> as -> as
export const sort = safeArrayMethod('sort');

/** Removes duplicates from an array. Naive implementation. */
// uniq :: as -> as
export const uniq = compose(Array.from, x => new Set(x));

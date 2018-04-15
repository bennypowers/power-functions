import { compose } from './compose.js';
import { uniq, map } from './array.js';
import { prop } from './prop.js';

/** Returns unique values for a key in a list of objects. */
// uniqueByKey :: s -> obj -> bool
export const uniqueByKey = key => compose(uniq, map(prop(key)));

/** Makes array methods point-free. */
// safeArrayMethod :: m -> f -> as -> b
export const safeArrayMethod = name => f => as =>
  (as && as[name] && typeof as[name] === 'function' ? [...as] : [])[name](f);

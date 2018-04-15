/** Compose functions right-to-left */
// compose :: fs -> f
export const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));

/** True when both predicates are true. Naive implementation cribbed from Ramda. */
// and :: (f, g) -> bool
export const and = (f, g) => function _and() {
  // the much-maligned `arguments` object gives us a leg up here.
  return f.apply(this, arguments) && g.apply(this, arguments);
};

/** The constant function. Given a parameter, returns a function which always returns the parameter. */
// constant :: x -> ( () -> x )
export const constant = x => () => x;

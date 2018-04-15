// range :: int -> [int]
export const range = length =>
  Array
    .from({length})
    .map((_, i) => i);

export type Graph = Record<number, number[]>

export const graph: Graph = {
  1: [2],
  2: [1, 3],
  3: [2]
};

type Fn<T, R> = (acc: R, curr: T) => R

export const myReduce = <T, R>(nums: T[], fn: Fn<T, R>, init: R): R => {
  let acc: R = init

  for (const value of nums) {
    acc = fn(acc, value)
  }

  return acc
}

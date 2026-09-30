export const myMap = <T, R>(arr: T[], cb: (value: T, index: number) => R): R[] => {
  const newArray: R[] = []

  for (const [i, value] of arr.entries()) {
    newArray[i] = cb(value, i)
  }

  return newArray
}

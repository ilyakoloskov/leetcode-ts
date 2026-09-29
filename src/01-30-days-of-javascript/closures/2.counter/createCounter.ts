export const createCounter = (n: number) => {
  let count = n

  return (): number => count++
}

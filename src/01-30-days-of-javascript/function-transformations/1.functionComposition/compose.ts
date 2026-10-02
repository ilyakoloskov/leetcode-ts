type F = (x: number) => number

export const compose = (functions: F[]): F => {
  return (x) => {
    let acc = x

    for (const fn of [...functions].reverse()) {
      acc = fn(acc)
    }

    return acc
  }
}

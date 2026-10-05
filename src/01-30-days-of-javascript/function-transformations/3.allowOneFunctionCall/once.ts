export const once = <T extends (...args: any[]) => any>(fn: T) => {
  let called = false

  return (...args: Parameters<T>): ReturnType<T> | undefined => {
    if (called) return undefined
    called = true
    return fn(...args)
  }
}

type Fn = (...params: number[]) => number

export function memoize(fn: Fn): Fn {
  const cache = new Map<string, number>()

  return function (...args) {
    const key = args.join(',')
    if (cache.has(key)) return cache.get(key)!

    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

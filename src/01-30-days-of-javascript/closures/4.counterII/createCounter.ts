export const createCounter = (init: number) => {
  let state = init

  const increment = (): number => {
    state = state + 1

    return state
  }

  const decrement = (): number => {
    state = state - 1

    return state
  }

  const reset = (): number => {
    state = init

    return state
  }

  return {
    increment,
    decrement,
    reset,
  }
}

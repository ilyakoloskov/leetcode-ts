export const expect = (value: unknown) => {
  return {
    toBe: (other: unknown): true => {
      if (other === value) {
        return true
      }
      throw new Error('Not Equal')
    },
    notToBe: (other: unknown): true => {
      if (other !== value) {
        return true
      }
      throw new Error('Equal')
    },
  }
}

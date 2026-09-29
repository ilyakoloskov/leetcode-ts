import { describe, expect, it } from 'vitest'
import { createHelloWorld } from './createHelloWorld'

describe('createHelloWorld', () => {
  it('returns "Hello World" without arguments', () => {
    const f = createHelloWorld()

    expect(f()).toBe('Hello World')
  })

  it('ignores any arguments', () => {
    const f = createHelloWorld()

    expect(f({}, null, 42)).toBe('Hello World')
  })
})

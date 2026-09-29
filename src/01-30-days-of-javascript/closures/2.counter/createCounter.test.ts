import { it, describe, expect } from "vitest";
import { createCounter } from "./createCounter";

describe('createCounter', () => {
  it('starts at n and increases by 1', () => {
    const counter = createCounter(1)

    expect(counter()).toBe(1)
    expect(counter()).toBe(2)
    expect(counter()).toBe(3)
  })

  it('start with a negative value', () => {
    const counter = createCounter(-2)

    expect(counter()).toBe(-2)
    expect(counter()).toBe(-1)
    expect(counter()).toBe(0)
    expect(counter()).toBe(1)
  })

  it('keeps a separate count for each counter', () => {
    const a = createCounter(0)
    const b = createCounter(100)

    expect(a()).toBe(0)
    expect(a()).toBe(1)
    expect(a()).toBe(2)

    expect(b()).toBe(100)
    expect(b()).toBe(101)
    expect(b()).toBe(102)
  })
})
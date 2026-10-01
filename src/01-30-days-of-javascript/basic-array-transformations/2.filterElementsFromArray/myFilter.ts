type Fn<T> = (value: T, index: number) => unknown

export const myFilter = <T>(arr: T[], cb: Fn<T>): T[] => {
    const filteredArr: T[] = []

    for (const [index, value] of arr.entries()) {
        if (cb(value, index)) {
          filteredArr.push(value)
      } 
    }

    return filteredArr
};

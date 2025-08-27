export const myFavoriteNumbers = [3, 7, 21, 42, 99]

/**
 * 1.
 * Now when we know how the iteration works, lets to following challenge in all four ways....
 *
 * Create methods (use the skeletons bellow), that will accept and array of numbers and one multiplier.
 * Return a new array with each element multiplied by the multiplier.
 *
 * If you want to be sure, there is a test:
 * `npx jest src/typescript/2-arrays/3-iteration-with-return.spec.ts -t 'should return multiplied values by multiplier'`
 *
 * Just a hint: Maybe you will need some helper array to store the results.
 * At some ways there is no other way, for some this is redundant.
 *
 */

export const iterateForIn = (elements: number[], multiplier: number): number[] => {
    const result: number[] = []
    for (const i in elements) {
        result.push(elements[i] * multiplier)
    }
    return result
}

export const iterateForOf = (elements: number[], multiplier: number): number[] => {
    const result: number[] = []
    for (const i of elements) {
        result.push(i * multiplier)
    }
    return result
}

export const iterateForEach = (elements: number[], multiplier: number): number[] => {
    const result: number[] = []
    elements.forEach((i) => {
        result.push(i * multiplier)
    })
    return result
}

export const iterateMap = (elements: number[], multiplier: number): number[] => {
    return elements.map((i) => i * multiplier)
}

/**
 * 2.
 * Again lets to following challenge in all four ways....
 *
 * Create methods (use the skeletons bellow), that will accept and array of numbers nothing else.
 * Return a new array with each element multiplied by the index of the element.
 *
 * example: input = [2,4,6]
 *  => this means (array count in programming usually starts with 0) [2*0, 4*1, 6*2]
 *  => output = [0,4,12]
 *
 * If you want to be sure, there is a test:
 * `npx jest src/typescript/2-arrays/3-iteration-with-return.spec.ts -t 'should return multiplied values by its own index'`
 *
 * Just a hint: Maybe you will need some helper array to store the results.
 * At some ways there is no other way, for some this is redundant.
 *
 * BTW in one of those this is really painful and i dont expect all four ways to be completed.
 * But all can be achieved.
 *
 */

export const iterateForInByIndex = (elements: number[]): number[] => {
    const result: number[] = []
    for (const i in elements) {
        result.push(elements[i] * Number(i))
    }
    return result
}

export const iterateForOfByIndex = (elements: number[]): number[] => {
    const result: number[] = []
    for (const [i, index] of elements.entries()) {
        result.push(i * index)
    }
    return result
}

export const iterateForEachByIndex = (elements: number[]): number[] => {
    const result: number[] = []
    elements.forEach((i, index) => {
        result.push(i * index)
    })
    return result
}

export const iterateMapByIndex = (elements: number[]): number[] => {
    return elements.map((i, index) => i * index)
}

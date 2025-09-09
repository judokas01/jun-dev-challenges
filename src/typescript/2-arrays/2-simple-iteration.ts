export const myFavoriteNumbers = [1, 13, 71, 387, 250]

/**
 * There are 4 pretty similar ways how to iterate (go through) over an array in JavaScript.
 *
 * 1. for .. in
 * 2. for .. of
 * 3. forEach
 * 4. map
 *
 * Create all four ways how to do this. The task is just to console log each element.
 * Really just `console.log(element)`
 *
 * If you want to be sure, there is a test:
 * `npx jest src/typescript/2-arrays/2-simple-iteration.spec.ts`
 *
 */


export const iterateForIn = (elements: number[]): void => {
    for (let i = 0; i < elements.length; i++) {
        console.log(myFavoriteNumbers[i])
    }
}

export const iterateForOf = (elements: number[]): void => {
    for (const i of elements) {
        console.log(i)
    }
}

export const iterateForEach = (elements: number[]): void => {
    elements.forEach((i) => {
        console.log(i)
    })
}

export const iterateMap = (elements: number[]): void => {
    elements.map((i) => {
        console.log(i)
    })
}

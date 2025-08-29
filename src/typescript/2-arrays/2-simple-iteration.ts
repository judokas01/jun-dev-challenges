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

// returns only index, that's why we have to log elements[index]s
export const iterateForIn = (elements: number[]): void => {
    for (const index in elements) {
        console.log(elements[index])
    }
}

// check the numbers, log numbers
export const iterateForOf = (elements: number[]): void => {
    for (const numbers of elements) {
        console.log(numbers)
    }
}

// only logs numbers?
export const iterateForEach = (elements: number[]): void => {
    elements.forEach((numbers) => {
        console.log(numbers)
    })
}

// map creates new array - difference with forEach - use for transformation of array
// returns new array
export const iterateMap = (elements: number[]): void => {
    elements.map((numbers) => {
        console.log(numbers)
    })
}

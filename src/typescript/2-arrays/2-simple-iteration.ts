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


//mám to takhle přepsat ty elements na myFavouriteNumbers? testy mi projdou i tak
export const iterateForIn = (myFavoriteNumbers: number[]): void => {
    for (const i in myFavoriteNumbers) {
        console.log(myFavoriteNumbers[i])
    }
}

export const iterateForOf = (elements: number[]): void => {
    for (const i of myFavoriteNumbers) {
        console.log(i)
    }
}

export const iterateForEach = (elements: number[]): void => {
    myFavoriteNumbers.forEach((i) => {
        console.log(i)
    })
}

export const iterateMap = (elements: number[]): void => {
    myFavoriteNumbers.map((i) => {
        console.log(i)
    })
}

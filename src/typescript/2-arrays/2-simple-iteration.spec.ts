import {
    iterateForIn,
    iterateForEach,
    iterateForOf,
    iterateMap,
    myFavoriteNumbers,
} from './2-simple-iteration'

describe('simple array iteration', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it.each([iterateForIn, iterateForEach, iterateForOf, iterateMap])('should iterate', (fn) => {
        const logSpy = jest.spyOn(console, 'log')
        fn(myFavoriteNumbers)

        expect(logSpy).toHaveBeenCalledTimes(myFavoriteNumbers.length)

        expect(logSpy.mock.calls.map((e) => e.at(0))).toEqual(myFavoriteNumbers)
    })
})

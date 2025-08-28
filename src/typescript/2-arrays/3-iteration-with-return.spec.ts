import {
    iterateForIn,
    iterateForEach,
    iterateForOf,
    iterateMap,
    iterateForInByIndex,
    iterateForOfByIndex,
    iterateForEachByIndex,
    iterateMapByIndex,
} from './3-iteration-with-return'

describe('simple iteration with return', () => {
    const numbers = [1, 7, 54, 99]
    const indexMultiplierInput = [2, 4, 6]
    const indexMultiplierOutput = [0, 4, 12]
    const multiplier = 14

    it.each([iterateForIn, iterateForEach, iterateForOf, iterateMap])(
        'should return multiplied values by multiplier',
        (fn) => {
            const result = fn(numbers, multiplier)

            expect(result).toEqual(val(numbers, multiplier))
        },
    )

    it.each([iterateForInByIndex, iterateForOfByIndex, iterateForEachByIndex, iterateMapByIndex])(
        'should return multiplied values by its own index',
        (fn) => {
            const result = fn(indexMultiplierInput)

            expect(result).toEqual(indexMultiplierOutput)
        },
    )
})

const val = (es: number[], m: number): number[] => es.map((e) => e * m)

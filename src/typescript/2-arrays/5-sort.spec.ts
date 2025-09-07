import { Pokemon, sortAlphabeticallyAsc, sortAlphabeticallyDesc, sortByPokemonName } from './5-sort'

describe('array sort tests', () => {
    it('should sort all elements asc', () => {
        const inputArray = ['c', 'a', 'q', 'r']
        const expectedOutput = ['a', 'c', 'q', 'r']

        const result = sortAlphabeticallyAsc(inputArray)

        expect(result).toEqual(expectedOutput)
    })

    it('should sort all elements desc', () => {
        const inputArray = ['c', 'a', 'q', 'r']
        const expectedOutput = ['r', 'q', 'c', 'a']

        const result = sortAlphabeticallyDesc(inputArray)

        expect(result).toEqual(expectedOutput)
    })

    it('should sort by pokemon name asc', () => {
        const inputArray: Pokemon[] = [
            { name: 'Bulbasaur', owner: 'a' },
            { name: 'Squirtle', owner: 'q' },
            { name: 'Pikachu', owner: 'c' },
        ]

        const expectedOutput = [
            { name: 'Bulbasaur', owner: 'a' },
            { name: 'Pikachu', owner: 'c' },
            { name: 'Squirtle', owner: 'q' },
        ]

        const result = sortByPokemonName(inputArray)

        expect(result).toEqual(expectedOutput)
    })
})

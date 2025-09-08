import {
    filterLowerOrEqual,
    filterOutByCriteria,
    filterOutNullish,
    Pokemon,
    PokemonElement,
} from './4-filter'

describe('filter tests', () => {
    it('should return array with filtered out numbers lower or equal than ', () => {
        const lowerThen = 10
        const inputArray = [1, 5, 7, 10, 11, 12, 20, 2515]
        const expectedOutput = [11, 12, 20, 2515]

        const result = filterLowerOrEqual(inputArray, lowerThen)

        expect(result).toEqual(expectedOutput)
    })

    it('should return array of pokemons', () => {
        const inputArray: (Pokemon | null)[] = [
            { element: PokemonElement.Earth, name: 'Bulbasaur', power: 10, owner: null },
            null,
            { element: PokemonElement.Water, name: 'Squirtle', power: 20, owner: null },
            null,
            { element: PokemonElement.Electricity, name: 'Pikachu', power: 30, owner: null },
            null,
        ]
        const expectedOutput = [
            { element: PokemonElement.Earth, name: 'Bulbasaur', power: 10, owner: null },
            { element: PokemonElement.Water, name: 'Squirtle', power: 20, owner: null },
            { element: PokemonElement.Electricity, name: 'Pikachu', power: 30, owner: null },
        ]

        const result = filterOutNullish(inputArray)

        expect(result).toEqual(expectedOutput)
    })

    it('should filter out all pokemons that do not fulfill the criteria', () => {
        const inputArray: (Pokemon | null)[] = [
            { element: PokemonElement.Earth, name: 'Bulbasaur', power: 10, owner: null },
            null,
            { element: PokemonElement.Water, name: 'Squirtle', power: 33, owner: 'Rosa' },
            null,
            { element: PokemonElement.Electricity, name: 'Tired Pikachu', power: 20, owner: 'Ash' },
            null,
            {
                element: PokemonElement.Electricity,
                name: 'Plot armor Pikachu',
                power: 99999,
                owner: 'Ash',
            },
            { element: PokemonElement.Fire, name: 'Charizard', power: 21, owner: 'Brock' },
        ]
        const expectedOutput = [
            {
                element: PokemonElement.Electricity,
                name: 'Plot armor Pikachu',
                power: 99999,
                owner: 'Ash',
            },
        ]

        const result = filterOutByCriteria(inputArray)

        expect(result).toEqual(expectedOutput)
    })
})

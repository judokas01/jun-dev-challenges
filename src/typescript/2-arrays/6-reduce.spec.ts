import {
    PokemonElement,
    PokemonWithoutOwner,
    sumArray,
    sumPokemonByElement,
    sumPokemonPowerByElement,
} from './6-reduce'

const inputPokemonArray: PokemonWithoutOwner[] = [
    { element: PokemonElement.Earth, name: 'Golem', power: 3 },
    { element: PokemonElement.Earth, name: 'Onix', power: 31 },
    { element: PokemonElement.Water, name: 'Squirtle', power: 6 },
    { element: PokemonElement.Water, name: 'Psyduck', power: 33 },
    { element: PokemonElement.Electricity, name: 'Pikachu', power: 99 },
    { element: PokemonElement.Electricity, name: 'Raichu', power: 17 },
    { element: PokemonElement.Fire, name: 'Charizard', power: 45 },
    { element: PokemonElement.Fire, name: 'Charmander', power: 3 },
    { element: PokemonElement.Fire, name: 'Charmeleon', power: 17 },
    { element: PokemonElement.Wind, name: 'Clefairy', power: 3 },
]

describe('array reduce tests', () => {
    it('should sum all elements', () => {
        const inputArray = [1, 5, 7, 10, 11, 12, 20, 2515]

        const expectedOutput = 2581

        const result = sumArray(inputArray)

        expect(result).toEqual(expectedOutput)
    })

    it('should sum all pokemon by Element', () => {
        const result = sumPokemonByElement(inputPokemonArray)

        expect(result).toMatchObject({
            [PokemonElement.Earth]: 2,
            [PokemonElement.Water]: 2,
            [PokemonElement.Fire]: 3,
            [PokemonElement.Wind]: 1,
            [PokemonElement.Electricity]: 2,
        } satisfies Record<PokemonElement, number>)
    })

    it('should sum all pokemon by Element', () => {
        const result = sumPokemonPowerByElement(inputPokemonArray)

        expect(result).toMatchObject({
            [PokemonElement.Earth]: 34,
            [PokemonElement.Water]: 39,
            [PokemonElement.Fire]: 65,
            [PokemonElement.Wind]: 3,
            [PokemonElement.Electricity]: 116,
        } satisfies Record<PokemonElement, number>)
    })
})

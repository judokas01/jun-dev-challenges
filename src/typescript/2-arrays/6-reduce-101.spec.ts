import {
    countPokemon,
    countRemainingPouchCapacity,
    joinPokemonName,
    PokemonElement,
    PokemonWithoutOwner,
    verifyTournamentPowerLevel,
    verifyTournamentPowerLevelForElement,
} from './6-reduce-101'

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

describe('array reduce 101 tests', () => {
    it('should join all pokemon names', () => {
        const result = joinPokemonName(inputPokemonArray)

        expect(result).toEqual(
            `GolemOnixSquirtlePsyduckPikachuRaichuCharizardCharmanderCharmeleonClefairy`,
        )
    })

    it('should get the pokemon count', () => {
        const result = countPokemon(inputPokemonArray)

        expect(result).toBe({ pokemonCount: 10 })
    })

    it('should count remaining pouch capacity', () => {
        const result = countRemainingPouchCapacity(inputPokemonArray, 20)

        expect(result).toBe(10)
    })

    it('should count remaining power level', () => {
        const result = verifyTournamentPowerLevel(inputPokemonArray, 300)

        expect(result).toBe(300 - 257)
    })

    it.each([
        { element: PokemonElement.Earth, remaining: 16 },
        { element: PokemonElement.Electricity, remaining: -66 },
    ])('should count remaining power level for $element', ({ element, remaining }) => {
        const result = verifyTournamentPowerLevelForElement(inputPokemonArray, 50, element)

        expect(result).toBe(remaining)
    })
})

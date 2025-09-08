/**
 * 1.
 * Create a method, summing all numbers in an array using reduce.
 * test
 * npx jest src/typescript/2-arrays/6-reduce.spec.ts -t 'should sum all elements'
 */

export const sumArray = (pokemons: number[]): number => {
    return pokemons.reduce((sum, number) => sum + number)
}

// --------------------------

export enum PokemonElement {
    Earth = 'Earth',
    Water = 'Water',
    Fire = 'Fire',
    Wind = 'Wind',
    Electricity = 'Electricity',
}

export type PokemonWithoutOwner = { name: string; element: PokemonElement; power: number }

/**
 * 2.
 * Create method, that will accept array of Pokemon and will return object, where the key is PokemonElement and value is sum of pokemon with the given element.
 *
 */

export const sumPokemonByElement = (
    pokemons: PokemonWithoutOwner[],
): Record<PokemonElement, number> => {}

/**
 * 3.
 * Create method, that will accept array of Pokemon and will return object, where the key is PokemonElement and sum of power of all Pokemon with the given element.
 *
 */

export const sumPokemonPowerByElement = (
    pokemons: PokemonWithoutOwner[],
): Record<PokemonElement, number> => {}

// little help, this is how the output should look like
// const expectedOutput = {
//     [PokemonElement.Earth]: 0,
//     [PokemonElement.Water]: 0,
//     [PokemonElement.Fire]: 0,
//     [PokemonElement.Wind]: 0,
//     [PokemonElement.Electricity]: 0,
// }

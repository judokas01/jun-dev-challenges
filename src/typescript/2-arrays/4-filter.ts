/**
 * 1.
 * Create method, that will accept two arguments
 * - array of numbers
 * - number
 *
 * This method should filter out all elements that are lower or equal the second argument.
 *
 */

export const filterLowerOrEqual = (elements: number[], lowerThan: number): number[] => {
    return elements.filter((element) => element > lowerThan)
}

export enum PokemonElement {
    Earth = 'Earth',
    Water = 'Water',
    Fire = 'Fire',
    Wind = 'Wind',
    Electricity = 'Electricity',
}

export type Pokemon = { name: string; element: PokemonElement; power: number; owner: string | null }

/**
 * 2.
 * Create method, that will accept array of Pokemon or null.
 * And will return only Pokemons
 *
 */

export const filterOutNullish = (elements: (Pokemon | null)[]): Pokemon[] => {
    if (elements === null) {
        return []
    }
    return elements
}

/**
 * 3.
 * Create method, that will accept array of Pokemon or null.
 * And will return array of pokemons that fulfill the given criteria
 * - is not null
 * - has a owner
 * - power is higher than 20
 * - element is either fire or electricity
 *
 * Recommendation: use helper methods and several filter iterations.
 * The goals is to make it easy to read and understand.
 *
 */

export const filterOutByCriteria = (elements: (Pokemon | null)[]): Pokemon[] => {}

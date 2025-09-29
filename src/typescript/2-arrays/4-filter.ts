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
    const filtered = elements.filter((element) => element > lowerThan)
    return filtered
}

// --------------------------

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
    const filtered = elements.filter((element) => element !== null)
    return filtered as Pokemon[]
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

export const filterOutByCriteria = (elements: (Pokemon | null)[]): Pokemon[] => {
    return elements
        .filter((element) => element !== null)
        .filter((element) => element.owner !== null)
        .filter((element) => element.power > 20)
        .filter(
            (element) =>
                element.element === PokemonElement.Fire ||
                element.element === PokemonElement.Electricity,
        )
}

// přes funkci
// export const filterOutByCriteria = (elements: (Pokemon | null)[]): Pokemon[] => {
//     const criteria = (pokemon: Pokemon | null): pokemon is Pokemon => {
//         return (
//             pokemon !== null &&
//             pokemon.owner !== null &&
//             pokemon.power > 20 &&
//             (pokemon.element === PokemonElement.Fire ||
//                 pokemon.element === PokemonElement.Electricity)
//         )
//     }

//     export const filterOutByCriteria = (elements: (Pokemon | null)[]): Pokemon[] => {
//         return elements.filter(criteria)
//     }
// }

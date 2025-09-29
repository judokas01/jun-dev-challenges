/**
 * 1.
 * Create a method that will accept two arguments: array of numbers and a number.
 * The method should return true if at least one element in the array is greater than the given number.
 * Otherwise, it should return false.
 * test
 * npx jest src/typescript/2-arrays/7-some-every.spec.ts
 */

export const isAtLeastOneGreaterThan = (elements: number[], threshold: number): boolean => {
    return elements.some((elementNumber) => elementNumber > threshold)
}

/**
 * 2.
 * Create a method that will accept two arguments: array of numbers and a number.
 * The method should return true if all elements in the array are greater than the given number.
 * Otherwise, it should return false.
 * test
 */

export const areAllGreaterThan = (elements: number[], threshold: number): boolean => {
    return elements.every((elementNumber) => elementNumber > threshold)
}

/**
 * 3.
 * Create a method that will accept three arguments: array of numbers, number and number.
 * The method should return true if at least one element in the array is between the given numbers.
 * Otherwise, it should return false.
 * test
 */

export const isAtLeastOneBetween = (elements: number[], lower: number, upper: number): boolean => {
    return elements.some((elementNumber) => elementNumber > lower && elementNumber < upper)
}

export enum PokemonElement {
    Earth = 'Earth',
    Water = 'Water',
    Fire = 'Fire',
    Wind = 'Wind',
    Electricity = 'Electricity',
}

export type PokemonWithoutOwner = { name: string; element: PokemonElement; power: number }

/**
 * 4.
 * Create a method that will accept two arguments: array of Pokemon and a number.
 * The method should return true if at least one Pokemon in the array has power greater than the given number.
 * Otherwise, it should return false.
 */

export const isAtLeastOnePokemonGreaterThan = (
    pokemons: PokemonWithoutOwner[],
    threshold: number,
): boolean => {
    return pokemons.some((pokemon) => pokemon.power > threshold)
}

/**
 * 5.
 * Create a method that will accept two arguments: array of Pokemon and a element.
 * The method should return true if all Pokemons in the array has given element.
 * Otherwise, it should return false.
 */
export const areAllPokemonsOfElement = (
    pokemons: PokemonWithoutOwner[],
    element: PokemonElement,
): boolean => {
    return pokemons.every((pokemon) => pokemon.element === element)
}

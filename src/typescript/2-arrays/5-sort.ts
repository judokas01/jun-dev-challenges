/**
 * 1.
 * Create a method, sorting all stings alphabetically in ascending order (A-Z).
 *
 */

export const sortAlphabeticallyAsc = (elements: string[]): string[] => {
    return elements.sort((a, b) => a.localeCompare(b))
}

/**
 * 2.
 * Create a method, sorting all stings alphabetically in descending order (Z-A).
 *
 */
export const sortAlphabeticallyDesc = (elements: string[]): string[] => {
    return elements.sort((a, b) => b.localeCompare(a))
}

export type Pokemon = { name: string; owner: string }

/**
 * 3.
 * Create method, that will accept array of Pokemon and return sorted array of Pokemons by name alphabetically (A-Z).
 *
 */

export const sortByPokemonName = (elements: Pokemon[]): Pokemon[] => {
    return elements.sort((a, b) => a.name.localeCompare(b.name))
}

export enum PokemonElement {
    Earth = 'Earth',
    Water = 'Water',
    Fire = 'Fire',
    Wind = 'Wind',
    Electricity = 'Electricity',
}

export type PokemonWithoutOwner = { name: string; element: PokemonElement; power: number }

/**
 * 1.
 * Create a method using reduce, that will accept array of pokemon and will return string, that will just join all pokemon names without coma or any separator.
 * So the output should be something like: "GolemOnixSquirtlePsyduck..."
 */

export const joinPokemonName = (pokemons: PokemonWithoutOwner[]): string => {
    //A
    return pokemons.reduce((acc1, pokemon3) => acc1 + pokemon3.name, '')

    //B
    /*return pokemons.reduce((acc1, pokemon3) => {
        const res = acc1 + pokemon3.name
        return res
    }, '')*/

    //C
    /*return pokemons.reduce(myMethod1, '')
    export const myMethod1 = (acc: string, pokemon: PokemonWithoutOwner, i: number): string => {
        return acc + pokemon.name + i
    }*/
}

/**
 * 2.
 * Create a method using reduce, that will accept array of pokemon and will return an object matching interface bellow, where pokemonCount is a sum of all pokemons in the array.
 *
 */

export const countPokemon = (pokemons: PokemonWithoutOwner[]): { pokemonCount: number } => {
    const pokemonCount: number = pokemons.reduce((akumulator) => akumulator++, 0)
    return { pokemonCount }
}

/**
 * 3.
 * Create a method using reduce, that will accept array of pokemon and number representing a capacity of pokemon pouch.
 * The output should be a number presenting how many "slots" inside the pouch is left after counting all the pokemon.
 *
 * Example: i have 10 pocket size and 3 pokemons, so the output should be 7.
 */

export const countRemainingPouchCapacity = (
    pokemons: PokemonWithoutOwner[],
    pouchCapacity,
): number => {}

/**
 * 4.
 * Create a method using reduce, that will accept array of pokemon and number representing a power level cap on a tournament.
 * Lets say i want to enter a tournament, but the tournament has a power level cap (maximum power that all my pokemon combined can have), so i need to check if my pokemons are not exceeding that cap.
 * The output should be a number presenting how many power level points i have left before reaching the cap.
 *
 */

export const verifyTournamentPowerLevel = (
    pokemons: PokemonWithoutOwner[],
    tourgnamentPowerLevelCap: number,
): number => {}

/**
 * 5.
 * The same as above, but this time the power level cap is only for specific pokemon element.
 *
 */

export const verifyTournamentPowerLevelForElement = (
    pokemons: PokemonWithoutOwner[],
    tourgnamentPowerLevelCap: number,
    element: PokemonElement,
): number => {}

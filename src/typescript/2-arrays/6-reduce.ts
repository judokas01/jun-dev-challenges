/**
 * 1.
 * Create a method, summing all numbers in an array using reduce.
 * test
 * npx jest src/typescript/2-arrays/6-reduce.spec.ts -t 'should sum all elements'
 */

// acc - accumulator - to, co já chci na konci, "krabice na výsledky"
// element pole, přes které iteruju
// 0 - stav "krabice" - akumulátoru - na začátku
// můžu i odčítat, atd
export const sumArray = (pokemons: number[]): number => {
    return pokemons.reduce((acc, number) => acc + number, 0)
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

// na konci vrátí jednu hodnotu, kterou já si zadám. Na vstupu array - na konci to, co já chci
export const sumPokemonByElement = (
    pokemons: PokemonWithoutOwner[],
): Record<PokemonElement, number> => {
    const initialValue: Record<PokemonElement, number> = {
        Earth: 0,
        Water: 0,
        Fire: 0,
        Wind: 0,
        Electricity: 0,
    }

    return pokemons.reduce((acc, pokemon) => {
        acc[pokemon.element] += 1
        return acc
    }, initialValue)
}

/**
 * 3.
 * Create method, that will accept array of Pokemon and will return object, where the key is PokemonElement and sum of power of all Pokemon with the given element.
 *
 */

// reduce - kasička / acc, postupně do ní přidávám hodnoty
// začínám na 0, vezmu prvního Pokémona, přičtu jeho power k 0 a dám do kasičky k elementu
// vezmu druhého pokémona, přidám jeho power do kasičky k elementu
// na konci mám v kasičce sum power pro každý element
export const sumPokemonPowerByElement = (
    pokemons: PokemonWithoutOwner[],
): Record<PokemonElement, number> => {
    const result = pokemons.reduce<Record<PokemonElement, number>>(
        (acc, pokemon) => {
            const pokemonElement = pokemon.element // přečte element Pokémona
            const currentPowerSum = acc[pokemonElement] // přečte aktuální počet
            const updatedPowerSum = currentPowerSum + pokemon.power // přičte power aktuálního Pokémona
            acc[pokemonElement] = updatedPowerSum // uloží zpátky do kasičky
            return acc // vrátí kasičku, aby se mohla použít v dalším kole
        },
        {
            [PokemonElement.Earth]: 0,
            [PokemonElement.Water]: 0,
            [PokemonElement.Fire]: 0,
            [PokemonElement.Wind]: 0,
            [PokemonElement.Electricity]: 0,
        },
    )
    return result
}

// little help, this is how the output should look like
// const expectedOutput = {
//     [PokemonElement.Earth]: 0,
//     [PokemonElement.Water]: 0,
//     [PokemonElement.Fire]: 0,
//     [PokemonElement.Wind]: 0,
//     [PokemonElement.Electricity]: 0,
// }

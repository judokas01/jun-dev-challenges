import {
    areAllGreaterThan,
    areAllPokemonsOfElement,
    isAtLeastOneBetween,
    isAtLeastOneGreaterThan,
    isAtLeastOnePokemonGreaterThan,
    PokemonElement,
    PokemonWithoutOwner,
} from './7-some-every'

describe('some and every tests ', () => {
    it.each([
        { elements: [1, 2, 3, 4, 5], threshold: 3, expected: true },
        { elements: [1, 2, 3], threshold: 5, expected: false },
        { elements: [-10, -5, -1], threshold: 0, expected: false },
    ])(
        'should correctly return $expected when threshold is $threshold and at least one element is bigger than threshold',
        ({ elements, expected, threshold }) => {
            const isGreater = isAtLeastOneGreaterThan(elements, threshold)

            expect(isGreater).toEqual(expected)
        },
    )

    it.each([
        { elements: [1, 2, 3, 4, 5], threshold: 3, expected: false },
        { elements: [7, 234, 77, 33], threshold: 5, expected: true },
        { elements: [-10, -5, -1], threshold: 0, expected: false },
    ])(
        'should correctly return $expected when threshold and all elements are bigger than threshold',
        ({ elements, expected, threshold }) => {
            const isGreater = areAllGreaterThan(elements, threshold)

            expect(isGreater).toEqual(expected)
        },
    )

    it.each([
        { elements: [1, 2, 3, 4, 5], lower: 3, upper: 5, expected: true },
        { elements: [7, 234, 77, 33], lower: 5, upper: 100, expected: true },
        { elements: [30, 50], lower: 0, upper: 10, expected: false },
    ])(
        'should correctly return $expected when at least one element is between values $lower and $upper',
        ({ elements, expected, lower, upper }) => {
            const isGreater = isAtLeastOneBetween(elements, lower, upper)

            expect(isGreater).toEqual(expected)
        },
    )

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

    it.each([
        {
            pokemons: inputPokemonArray,
            powerThreshold: 70,
            expected: true,
        },
        {
            pokemons: inputPokemonArray,
            powerThreshold: 150,
            expected: false,
        },
    ])(
        'should return $expected when testing pokemon power',
        ({ pokemons, expected, powerThreshold }) => {
            const isGreater = isAtLeastOnePokemonGreaterThan(pokemons, powerThreshold)

            expect(isGreater).toEqual(expected)
        },
    )

    it.each([
        {
            pokemons: inputPokemonArray,
            expected: false,
            element: PokemonElement.Fire,
        },
        {
            pokemons: [
                { element: PokemonElement.Fire, name: 'Charizard', power: 45 },
                { element: PokemonElement.Fire, name: 'Charmander', power: 3 },
                { element: PokemonElement.Fire, name: 'Charmeleon', power: 17 },
            ],
            expected: true,
            element: PokemonElement.Fire,
        },
    ])(
        'should return $expected when testing pokemon element',
        ({ pokemons, expected, element }) => {
            const isGreater = areAllPokemonsOfElement(pokemons, element)

            expect(isGreater).toEqual(expected)
        },
    )
})

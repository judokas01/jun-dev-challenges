export type Character = {
    id: string
    name: string
    species: string
    homeWorld: string
    age: number
    isForceSensitive: boolean
    lightsaberColor: 'blue' | 'green' | 'red' | 'purple' | 'yellow' | 'white' | null
    powerLevel: number | null
    fraction: 'Jedi' | 'Sith' | 'Rebel' | 'Empire' | 'Bounty Hunter' | 'Smuggler' | 'Other'
}

/**
 * 1. create a type that uses only name and species properties of Character.
 * hint: use generic type that picks properties from Character
 */

export type CharacterNameAndSpecies = Pick<Character, 'name' | 'species'>

/**
 * 2. create a type that uses every property of Character except for the `fraction` and `homeWorld`.
 * hint: use generic type that omits properties from Character
 */

export type AsocialCharacter = Omit<Character, 'fraction' | 'homeWorld'> // or???!!!

/**
 * 3. create a type that is basically the same as Character, but the fraction is always 'Sith' and the lightSaberColor is always `red`.
 * Feel free to type the new types as literal types.
 * hint: This should be very simmilar to the previous task, but you will need to add a few properties to the Character type.
 */

export type Sith = Character & {
    fraction: 'Sith'
    lightsaberColor: 'red'
}

/**
 * 4. create a type that is basically the same as Character, but the lightsaberColor can not be `null`.
 * ! Don't write the lightsaberColor values as literal types, use the existing type from Character.
 * hint: This should be very simmilar to the previous task, but you will need to use a utility type that makes sure the lightsaberColor is not null.
 */

export type LightSaberOwner = Character & {
    lightsaberColor: Exclude<Character['lightsaberColor'], null>
}

export const oldLuke: LightSaberOwner = {
    // lightsaber should be marked as error
    lightsaberColor: null,
    id: 'user1',
    name: 'Luke Skywalker',
    species: 'Human',
    homeWorld: 'Tatooine',
    age: 53,
    isForceSensitive: true,
    powerLevel: 9000,
    fraction: 'Jedi',
}

/**
 * 5. Create a method, that takes two arguments, first is a complete character
 * and the second a object, containing subset of properties from Character, that should be updated.
 *
 * `const updatedCharacter = updateCharacter(character, { age: 54, lightsaberColor: 'blue' })`
 *
 * this means that the updatedCharacter will have age 54 and lightsaberColor 'blue'.
 * The rest of the properties should be the same as in the original character.
 *
 *
 * !The main concern is the second argument type, not the result or the implementation.
 * But this is typical useCase for this generic, so feel free to implement it as you wish.
 */

export const updateCharacter = (character: Character, updates: unknown): Character => {
    throw new Error('Not implemented')
}

/**
 * 6. Create a method that takes two arguments, first is a complete character
 * and the second is a property name of Character and returns the value of that property as a string.
 * !The main concern is the second argument type, not the result or the implementation.
 */

export const getCharacterProperty = (character: Character, property: keyof Character): string => {
    throw new Error('Not implemented')
}

/**
 * 7 ! Bonus !. Create the same method as the previous one, but this time it would work for any object, not just Character.
 * This is a little more complex, but i could not resist the temptation to add it.
 */

export const getProperty = (objectToExtract: unknown, property: unknown): string => {
    throw new Error('Not implemented')
}

type SomeType = {
    a: string
    b: number
}

const someObject: SomeType = {
    a: 'a',
    b: 1,
}

getProperty(someObject, 'a') // you should get `'a'` as autocomplete for the second argument

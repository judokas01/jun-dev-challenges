/**
 * Create interfaces for each userObject, within the following constraints:
 * 1. create a base interface applicable to all characters
 **/

interface CharacterBase {
    name: string
    age: number
    id: string
    race: Race
    hasRing?: boolean
    friends?: CharacterBase[]
    enemies?: CharacterBase[]
}

enum Race {
    HOBBIT = 'Hobbit',
    ELF = 'Elf',
    HUMAN = 'Human',
    MONSTER = 'MONSTER',
    WIZARD = 'WIZARD',
}

export const bilbo: CharacterBase = {
    name: 'Bilbo Baggins',
    age: 120,
    id: 'user1',
    race: Race.HOBBIT,
    hasRing: true,
    // friends cant be monsters
    friends: [
        {
            name: 'Gandalf the Grey',
            age: 2019,
            id: 'user4',
            race: Race.WIZARD,
            // friends and enemies are not defined, because it would create a circular reference. But the type needs to be defined
            friends: undefined,
            enemies: undefined,
            hasRing: false,
        },
    ],
    // enemies can be only monsters
    enemies: [
        {
            name: 'Balrog the Bridgekeeper',
            age: 15987,
            id: 'user3',
            race: Race.MONSTER,
            enemies: undefined,
        },
    ],
}

export const gandalf: CharacterBase = {
    name: 'Gandalf the Grey',
    age: 2019,
    id: 'user4',
    race: Race.WIZARD,
    friends: [
        {
            name: 'Bilbo Baggins',
            age: 120,
            id: 'user1',
            race: Race.HOBBIT,
            hasRing: true,
            friends: undefined,
            enemies: undefined,
        },
    ],
    enemies: [
        {
            name: 'Balrog the Bridgekeeper',
            age: 15987,
            id: 'user3',
            race: Race.MONSTER,
            enemies: undefined,
        },
    ],
    // mind the fact that this is a wizard, so hasRing is false and cant be nothing else
    hasRing: false,
}

export const balrog: CharacterBase = {
    // monsters have no fingers so they cant possess rings
    name: 'Balrog the Bridgekeeper',
    age: 15987,
    id: 'user3',
    race: Race.MONSTER,
    enemies: [
        {
            name: 'Gandalf the Grey',
            age: 2019,
            id: 'user4',
            race: Race.WIZARD,
            friends: undefined,
            enemies: undefined,
            hasRing: false,
        },
        {
            name: 'Bilbo Baggins',
            age: 120,
            id: 'user1',
            race: Race.HOBBIT,
            hasRing: true,
            // friends cant be monsters
            friends: undefined,
            // enemies can be only monsters
            enemies: undefined,
        },
    ],
    // has no friends
}

/**
 * Create interfaces for each userObject, within the following constraints:
 * 2. create monster interface extending the base interface
 *  - members of monster interface can have only `MONSTER` race
 *  - cant have `hasRing` property
 *  - cant have friends
 * 3. create a Hero sub interface extending the base interface
 *   - members of hero interface can have only `HOBBIT`, `ELF`, `HUMAN` or `WIZARD
 *   - heroes can have `hasRing` property
 *   - heroes have both friends (another hero) and enemies (monsters)
 * 4. create a Wizard sub interface extending the Hero interface
 *   - members of wizard can `never` have a ring
 *
 * GENERAL RULES:
 * - the `friends` and `enemies` properties should be arrays, but should be optional to avoid circular references
 */

interface CharacterBase {
    name: string;
    age: number;
    id: string;
    race: Race;
    hasRing?: boolean;
    friends?: CharacterBase[]; 
    enemies?: CharacterBase[];
}

interface Monster extends CharacterBase {  
    race: Race.MONSTER;
    hasRing?: never; // monsters cant have rings
    friends?: never; // monsters cant have friends
}

interface Hero extends CharacterBase { 
    race: Race.HOBBIT | Race.ELF | Race.HUMAN | Race.WIZARD;
    hasRing?: boolean; // heroes can have rings
    friends?: Hero[]; // heroes can have friends
    enemies?: Monster[]; // heroes can have enemies which are monsters  
}

interface Wizard extends Hero {
    hasRing?: never; // wizards can never have a ring
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

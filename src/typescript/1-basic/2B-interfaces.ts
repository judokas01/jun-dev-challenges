enum Race {
    HOBBIT = 'Hobbit',
    ELF = 'Elf',
    HUMAN = 'Human',
    MONSTER = 'MONSTER',
}

export const bilbo: Bilbo = {
    name: 'Bilbo Baggins',
    age: 120,
    id: 'user1',
    race: Race.HOBBIT,
    hasRing: true,
}

export const arwen: Arwen = {
    name: 'Arwen',
    age: 2731,
    id: 'user2',
    race: Race.ELF,
    canShootArrow: true,
}

export const balrog: Balrog = {
    name: 'Balrog the Bridgekeeper',
    age: 15987,
    id: 'user3',
    race: Race.MONSTER,
    numberOfDefeatedWizards: 1,
}
/**
 * 2. Create again the interfaces, but there should be one base interface and the rest should be extended by this base interface.
 */
interface CharacterBase {
    name: string;
    age: number;
    id: string;
    race: Race
}

interface Bilbo extends CharacterBase {
    hasRing: boolean;
}  

interface Arwen extends CharacterBase {
    canShootArrow: boolean;
}

interface Balrog extends CharacterBase {
    numberOfDefeatedWizards: number;
}
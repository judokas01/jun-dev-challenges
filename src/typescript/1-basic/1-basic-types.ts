/**
 * 1. Instead of implicit types add explicit types to the variables bellow.
 * `const someNumber = 5` is an implicit type - TS knows it is number.
 * `const someNumber: Number = 5` is an explicit type - you tell TS it is number.
 */

export const userName : string = 'John Doe'
export const userAge : number = 30
export const numberOfBrainCells : bigint = 9_223_372_036_854_775_807n // large integer
export const hasFamilyMembers : boolean = true
export const familyMemberNames : string[] = ['Jane Doe', 'Jack Doe']
export const bankAccountBalance : number = null // refused to provide the amount
export const livingAddress : string = undefined // John is homeless, address is not expected

/**
 * 2. create a type for a trivial object that represents a user.
 */

type User = { 
    name: string, 
    age: number, 
    hasFamilyMembers: boolean, 
    numberOfBrainCells: bigint, 
    familyMemberNames: string[], 
    bankAccountBalance: number | null, 
    livingAddress: string | undefined 
}


export const user : User = {
    name: 'John Doe',
    age: 30,
    hasFamilyMembers: true,
    numberOfBrainCells: 9_223_372_036_854_775_807n,
    familyMemberNames: ['Jane Doe', 'Jack Doe'],
    bankAccountBalance: 150,
    livingAddress: 'Sesame street 123',
}

/**
 * 3. Create a type that is applicable for all user Objects.
 */
type UserForEveryone = {
    name: string,
    age: number,
    sex: 'Woman' | 'Man' | undefined
    hasFamilyMembers: boolean,
    familyMemberNames: string[] | null,
    bankAccountBalance?: number | null,
    livingAddress?: string | undefined,  
    race: string
}

export const user1 : UserForEveryone = {
    name: 'Bilbo Baggins',
    age: 120,
    sex: 'Man', // hint: there is finite set of possible values
    hasFamilyMembers: true,
    familyMemberNames: ['Frodo Baggins'],
    bankAccountBalance: 1500000000,
    livingAddress: 'Bag End, Hobbiton',
    race: 'Hobbit', // hint: there is a large set of possible values
}
export const user2 : UserForEveryone = {
    name: 'Arwen',
    age: 2731,
    sex: 'Woman',
    hasFamilyMembers: true,
    familyMemberNames: ['Eldarion'],
    bankAccountBalance: null,
    livingAddress: 'Rivendell',
    race: 'Half-elf',
}
export const user3 : UserForEveryone = {
    name: 'Balrog the Bridgekeeper',
    age: 15987,
    sex: undefined,
    hasFamilyMembers: false,
    familyMemberNames: null,
    race: 'Balrog',
}

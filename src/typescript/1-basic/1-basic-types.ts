/**
 * 1. Instead of implicit types add explicit types to the variables bellow.
 * `const someNumber = 5` is an implicit type - TS knows it is number.
 * `const someNumber: Number = 5` is an explicit type - you tell TS it is number.
 */

export const userName = 'John Doe'
export const userAge = 30
export const numberOfBrainCells = 9_223_372_036_854_775_807n // large integer
export const hasFamilyMembers = true
export const familyMemberNames = ['Jane Doe', 'Jack Doe']
export const bankAccountBalance = null // refused to provide the amount
export const livingAddress = undefined // John is homeless, address is not expected

/**
 * 2. create a type for a trivial object that represents a user.
 */

export const user = {
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

export const user1 = {
    name: 'Bilbo Baggins',
    age: 120,
    sex: 'Man', // hint: there is finite set of possible values
    hasFamilyMembers: true,
    familyMemberNames: ['Frodo Baggins'],
    bankAccountBalance: 1500000000,
    livingAddress: 'Bag End, Hobbiton',
    race: 'Hobbit', // hint: there is a large set of possible values
}
export const user2 = {
    name: 'Arwen',
    age: 2731,
    sex: 'Woman',
    hasFamilyMembers: true,
    familyMemberNames: ['Eldarion'],
    bankAccountBalance: null,
    livingAddress: 'Rivendell',
    race: 'Half-elf',
}
export const user3 = {
    name: 'Balrog the Bridgekeeper',
    age: 15987,
    sex: undefined,
    hasFamilyMembers: false,
    familyMemberNames: null,
    race: 'Balrog',
}

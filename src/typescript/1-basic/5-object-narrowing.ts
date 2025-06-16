type Duck = {
    name: string
    canTalk: boolean
    canFly: boolean
    canQuack: boolean
}

type Parrot = {
    name: string
    canTalk: boolean
    canFly: boolean
}

type Human = {
    name: string
    canTalk: true
    canFly: false
    canWalk: boolean
    canDrive: true
}

type Dog = {
    name: string
    canWalk: boolean
    hasTail: boolean
}

export const bird: Parrot = {
    name: 'Polly',
    canTalk: true,
    canFly: true,
}

export const duck: Duck = {
    name: 'Donald the Duck',
    canTalk: true,
    canFly: true,
    canQuack: true,
}

export const dog: Dog = {
    name: 'Rex',
    canWalk: true,
    hasTail: true,
}

export const human: Human = {
    name: 'John Doe',
    canTalk: true,
    canWalk: false,
    canDrive: true,
    canFly: false,
}

/**
 * Narrow down the type of the argument to return a string that describes the animal.
 * It should return a string in the format: "{name} is a '...'.".
 * For example: "Donald the Duck is a duck."
 * It is not expected to return a variable of type duck, parrot, human or dog. You should hardcode this string.
 *
 * Hint: Preferably use create several `is` methods ... const isDuck = (arg: Duck | Parrot | Human | Dog): arg is Duck => ....;
 * Don`t use any casting or `as` operator. example: `arg as Duck` is not allowed.
 * Use as few conditional statements as possible.
 */
export const narrowAnimal = (arg: Duck | Parrot | Human | Dog): string => {
    // remove this line and implement the function
    throw new Error('Not implemented yet')
}

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
    if (arg === undefined || arg === null) {
        return 'What the hell I am?'
    }
    if (isDuck(arg)) {
        return `${arg.name} is a duck.`
    }
    if (isParrot(arg)) {
        return `${arg.name} is a parrot.`
    }
    if (isClovek(arg)) {
        return `${arg.name} is a human.`
    }
    if (isDog(arg)) {
        return `${arg.name} is a dog.`
    }
    return 'What the hell I am?'
}

const isDuck = (arg: Duck | Parrot | Human | Dog): arg is Duck => {
    return typeof arg === 'object' && arg !== null && 'canQuack' in arg
}

const isParrot = (arg: Duck | Parrot | Human | Dog): arg is Parrot => {
    return (
        typeof arg === 'object' &&
        arg !== null &&
        'canTalk' in arg &&
        !('canQuack' in arg) &&
        !('hasTail' in arg) &&
        !('canDrive' in arg)
    )
}

const isClovek = (arg: Duck | Parrot | Human | Dog): arg is Human => {
    return typeof arg === 'object' && arg !== null && 'canDrive' in arg
}

const isDog = (arg: Duck | Parrot | Human | Dog): arg is Dog => {
    return typeof arg === 'object' && arg !== null && 'hasTail' in arg
}

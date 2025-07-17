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

const isDuck = (arg: Duck | Parrot | Dog | Human): arg is Duck => {
    return 'canQuack' in arg
}

const isHuman = (arg: Duck | Parrot | Dog | Human): arg is Human => {
    return 'canDrive' in arg
}

const isDog = (arg: Duck | Parrot | Dog | Human): arg is Dog => {
    return 'hasTail' in arg
}

const isParrot = (arg: Duck | Parrot | Dog | Human): arg is Parrot => {
    return 'canFly' in arg && 'canTalk' in arg && !('canQuack' in arg)
}

export const narrowAnimal = (arg: Duck | Parrot | Human | Dog): string => {
    if (isDuck(arg)) {
        return `${arg.name} is a duck.`
    }

    if (isHuman(arg)) {
        return `${arg.name} is a human.`
    }

    if (isDog(arg)) {
        return `${arg.name} is a dog.`
    }

    if (isParrot(arg)) {
        return `${arg.name} is a parrot.`
    }
}

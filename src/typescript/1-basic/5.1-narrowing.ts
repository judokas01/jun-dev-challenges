export type Programmer = {
    name: string
    canCode: true
    hasSex: null
    canCount: boolean
    hasEmpathy: false
}

export type FinanceBro = {
    name: string
    canCode: boolean
    hasSex: 'oh yes'
    canCount: boolean
    hasEmpathy: false
}

export type Hr = {
    name: string
    canCode: boolean
    hasSex: boolean
    canCount: boolean
    hasEmpathy: true
}

export type Madman = {
    name: string
    canCode: boolean
    hasSex: boolean
    canCount: boolean
    hasEmpathy: 'oh no no no'
}

type Professions = Programmer | FinanceBro | Hr | Madman

/**
 * Narrow down the type of the argument to return a string that describes the person.
 * It should return a string in the format: "{name} is a '...'.".
 * Values:
 * - Programmer: "Bob is a programmer."
 * - FinanceBro: "Giga is a finance bro."
 * - Hr: "Linda is an HR."
 * - Madman: "Hannibal is a madman."
 *
 * If nothing matches it should throw an error.
 *
 * Rules: - It must use type narrowing methods like `is`.
 *
 * `npx jest src/typescript/1-basic/5.1-narrowing.spec.ts`
 */

const isProgrammer = (person: Professions): person is Programmer => {
    return person.hasSex === null
}

const isFinanceBro = (person: Professions): person is FinanceBro => {
    return person.hasSex === 'oh yes'
}

const isHr = (person: Professions): person is Hr => {
    return person.hasEmpathy === true
}

const isMadman = (person: Professions): person is Madman => {
    return person.hasEmpathy === 'oh no no no'
}

export const narrowPerson = (person: Professions): string => {
    if (isProgrammer(person)) {
        return `${person.name} is a programmer.`
    }

    if (isFinanceBro(person)) {
        return `${person.name} is a finance bro.`
    }

    if (isHr(person)) {
        return `${person.name} is an HR.`
    }

    if (isMadman(person)) {
        return `${person.name} is a madman.`
    }

    throw Error('Unkown')
}

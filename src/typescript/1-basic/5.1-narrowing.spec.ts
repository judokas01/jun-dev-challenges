import { FinanceBro, Hr, Madman, narrowPerson, Programmer } from './5.1-narrowing'

const programmers: Programmer[] = [
    {
        canCode: true,
        name: 'Bob',
        canCount: true,
        hasEmpathy: false,
        hasSex: null,
    },
    {
        canCode: true,
        name: 'Geb',
        canCount: false,
        hasEmpathy: false,
        hasSex: null,
    },
]

const financeBros: FinanceBro[] = [
    {
        canCode: false,
        name: 'Giga',
        canCount: true,
        hasEmpathy: false,
        hasSex: 'oh yes',
    },
    {
        canCode: true,
        name: 'Chad',
        canCount: false,
        hasEmpathy: false,
        hasSex: 'oh yes',
    },
]
const hrs: Hr[] = [
    {
        canCode: false,
        name: 'Linda',
        canCount: false,
        hasEmpathy: true,
        hasSex: false,
    },
    {
        canCode: true,
        name: 'Žaneta',
        canCount: true,
        hasEmpathy: true,
        hasSex: true,
    },
    {
        canCode: true,
        name: 'Evžen',
        canCount: false,
        hasEmpathy: true,
        hasSex: false,
    },
]

const madmen: Madman[] = [
    {
        canCode: true,
        name: 'Hannibal',
        canCount: true,
        hasEmpathy: 'oh no no no',
        hasSex: true,
    },
    {
        canCode: false,
        name: 'Dahmer',
        canCount: false,
        hasEmpathy: 'oh no no no',
        hasSex: false,
    },
    {
        canCode: false,
        name: 'Ted Bundy',
        canCount: false,
        hasEmpathy: 'oh no no no',
        hasSex: true,
    },
    {
        canCode: true,
        name: 'Jason',
        canCount: true,
        hasEmpathy: 'oh no no no',
        hasSex: false,
    },
]

describe('Basic type narrowing', () => {
    const prog = programmers.map((person) => ({
        expected: `${person.name} is a programmer.`,
        person,
        name: person.name,
    }))

    const finance = financeBros.map((person) => ({
        expected: `${person.name} is a finance bro.`,
        person,
        name: person.name,
    }))

    const hr = hrs.map((person) => ({
        expected: `${person.name} is an HR.`,
        person,
        name: person.name,
    }))

    const mad = madmen.map((person) => ({
        expected: `${person.name} is a madman.`,
        person,
        name: person.name,
    }))

    it.each([...prog, ...finance, ...hr, ...mad])(
        'Should narrow $name to return a $expected text',
        ({ person, expected }) => {
            expect(narrowPerson(person)).toEqual(expected)
        },
    )

    it('should throw an error for unknown profession', () => {
        expect(() =>
            narrowPerson({
                name: 'Unknown',
                canCode: false,
                canCount: false,
                hasEmpathy: false,
                hasSex: false,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any),
        ).toThrow()
    })
})

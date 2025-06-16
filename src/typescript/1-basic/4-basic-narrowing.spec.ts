import { baseNarrowMe } from './4-basic-narrowing'

describe('Basic type narrowing', () => {
    it.each([
        { arg: 'string', expected: 'I am a string' },
        { arg: undefined, expected: 'I am undefined' },
        { arg: null, expected: 'I am null' },
        { arg: 13, expected: 'I am a number' },
        { arg: 13n, expected: 'What the hell I am?' },
        { arg: true, expected: 'I am a boolean' },
    ])('Should narrow $arg to return a $expected text', ({ arg, expected }) => {
        expect(baseNarrowMe(arg)).toEqual(expected)
    })
})

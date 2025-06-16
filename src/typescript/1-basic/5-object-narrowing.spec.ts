import { bird, dog, duck, human, narrowAnimal } from './5-object-narrowing'

describe('Basic type narrowing', () => {
    it.each([
        { arg: bird, expected: `${bird.name} is a parrot.` },
        { arg: dog, expected: `${dog.name} is a dog.` },
        { arg: duck, expected: `${duck.name} is a duck.` },
        { arg: human, expected: `${human.name} is a human.` },
    ])('Should narrow $arg to return a $expected text', ({ arg, expected }) => {
        expect(narrowAnimal(arg)).toEqual(expected)
    })
})

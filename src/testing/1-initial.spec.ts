import { getObject, summ } from './summ-method'

describe('First testing block', () => {
    it('should return a object', () => {
        const resultFormAPICall = getObject()

        // expect(resultFormAPICall.status).toBe(1)
        // expect(resultFormAPICall.b).toBe('text')

        // expect(resultFormAPICall).toMatchObject({
        //     status: 1,
        //     b: expect.any(String),
        // } satisfies Partial<typeof resultFormAPICall>)

        expect(resultFormAPICall).toMatchSnapshot()
    })
})

describe('Second testing block', () => {
    beforeAll(() => {
        console.log('Before all tests')
    })

    afterAll(() => {
        console.log('After all tests')
    })

    beforeEach(() => {
        console.log('Before each test')
    })

    afterEach(() => {
        console.log('After each test')
    })

    it('sum two numbers 2 and 3', () => {
        const firstNumber = 3
        const secondNumber = 2
        const result = summ(firstNumber, secondNumber)

        expect(result).toBe(5)
    })

    it.each([
        {
            firstNumber: 3,
            secondNumber: 2,
            expectedResult: 5,
        },
        {
            firstNumber: 5,
            secondNumber: 7,
            expectedResult: 12,
        },
        {
            firstNumber: 9,
            secondNumber: 17,
            expectedResult: 26,
        },
    ])(
        'sum two numbers $firstNumber and $secondNumber',
        ({ firstNumber, secondNumber, expectedResult }) => {
            const result = summ(firstNumber, secondNumber)

            expect(result).toBe(expectedResult)
        },
    )

    it.each([1, 2, 3])('sum two numbers %d and 5', (firstNumber) => {
        const result = summ(firstNumber, 5)

        expect(result).toBe(firstNumber + 5)
    })
})

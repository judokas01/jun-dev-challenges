// source here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

// arrow vs method like syntax

function add(a: number, b: number): number {
    return a + b
}

const add2 = (a: number, b: number): number => {
    return a + b
}

const add3 = (a: number, b: number): number => a + b

class MyClassMother {
    method1() {
        return 'string'
    }

    method2 = () => {
        return 'string'
    }
}

class MyClass extends MyClassMother {
    method1() {
        return 'string'
    }

    method2 = () => {
        return 'string'
    }
}

// optional chaining
type MyObj = {
    company?: {
        address?: {
            street?: string
        }
    }
}

const secondaryAddress: MyObj = {
    company: {
        address: {
            street: 'string',
        },
    },
}

const comp = secondaryAddress.company // maybe undefined
const address = secondaryAddress.company?.address // maybe undefined times 2

const myValue = secondaryAddress.company?.address?.street

const getCompany = (args: MyObj, primaryAddress: string): string | undefined => {
    if (args.company) {
        const companyForSure = args.company

        if (companyForSure.address) {
            const addressForSure = companyForSure.address

            if (addressForSure.street) {
                const streetForSure = addressForSure.street
                return streetForSure
            }
        }
    } else {
        return primaryAddress
    }
}

const primaryAddress = {
    address: {
        street: 'my street',
    },
}

const deliveryAddress = {
    street: secondaryAddress.company?.address?.street ?? primaryAddress.address.street,
    street: secondaryAddress.company?.address?.street || primaryAddress.address.street,
    postalCode: secondaryAddress.company?.address?.postalCode ?? primaryAddress.address.postalCode,
    city: secondaryAddress.company?.address?.city ?? primaryAddress.address.city,
}

// nullish coalescing ??

number > 0 && number < 300 // 1-299
number > 0 || number === -30 // 1- infinite, or -30

// ?? -

// null, undefined, '', false -> || // falsy
//  null, undefined  -> ?? // nulish

// || - logic OR

// && - logic AND

// Logical or ||

// Logical and &&

// qualities == vs ===

'3' === 3 // false
'3' == 3 // true

const kid = { age: 3, name: 'Paul' }

kid === kid // true

kid === { age: 3, name: 'Paul' } // false

// if else vs ternary

const myResult = kid.age === 3 ? 'is 3 years old' : 'is not 3 years old'

const getAgeResult = (kid: { age: number }): string => {
    if (kid.age === 3) {
        return 'is 3 years old'
    } else if (kid.age === 4) {
        return 'is 4 years old'
    } else {
        return 'is not 3 years old'
    }
}

// multi ternary
const myResult =
    kid.age === 3 ? 'is 3 years old' : kid.age === 4 ? 'is 4 years old' : 'is not 3 years old'

// spread and destructuring

const superHero = { firstName: 'Batman', age: 30, address: { street: '123 Street' } }
const superAnimal = { name: 'Bat', age: 10, address: { street: 'Cave' } }

// const { name, age } = superHero

const { firstName, age } = superHero
const { name: animalName, age: animalAge } = superAnimal

const myText = `My superhero is ${age} years old and his name is ${firstName}`
const myTextWithAnimal = `My superhero is ${animalAge} years old and his name is ${animalName}`

//  array deconstructin

const myArray = [1, 2, 3, 4]

const [firstElement, secondElement, thirdElement, fourthElement] = [1, 2, 3, 4]
const [firstElement, ...rest] = [1, 2, 3, 4]

console.log(rest) // output = [2,3,4]

const { firstName, ...otherPropertiesOfBatman } = superHero

const myNewOlderSuperHero = { ...otherPropertiesOfBatman, age: 60 }
// console.log(myNewOlderSuperHero) => output { firstName: 'Batman', age: 60, address: { street: '123 Street' } }

// variable inside string

// Remainder assignment %=

// negation !

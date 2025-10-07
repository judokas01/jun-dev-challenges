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
    postalCode: secondaryAddress.company?.address?.postalCode ?? primaryAddress.address.postalCode,
    city: secondaryAddress.company?.address?.city ?? primaryAddress.address.city,
}

// nullish coalescing ??

// Logical or ||

// Logical and &&

// qualities == vs ===

// spread and destructuring

// variable inside string

// if else vs ternary

// Remainder assignment %=

// negation !

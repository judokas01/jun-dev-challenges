import { faker } from '@faker-js/faker'

type Address = {
    street: string
    city: string
    country: string
    zipCode: string
    name: string
    company?: string
}

const createStaticAddress = (isCompany = false): Address => ({
    street: 'Dlouha trida 1',
    city: 'Prague',
    country: 'Czech Republic',
    zipCode: '11000',
    name: 'Prokop Buben',
    company: isCompany ? 'Alza' : undefined,
})

describe('Object matching of createStaticAddress', () => {
    describe('Match to object', () => {
        it('should create a address, when company the isCompany is true', () => {})
        it('should create a address, when company the isCompany is false', () => {})
    })

    describe('Match to snapshot', () => {
        it('should create a address, when company the isCompany is true', () => {})
        it('should create a address, when company the isCompany is false', () => {})
    })
})

const createPartiallyStaticAddress = (isCompany = false): Address => ({
    street: faker.location.street(),
    city: 'Prague',
    country: 'Czech Republic',
    zipCode: '11000',
    name: faker.person.fullName(),
    company: isCompany ? 'Alza' : undefined,
})

describe('Object matching of createPartiallyStaticAddress', () => {
    describe('Match to object', () => {
        it('should create a address, when company the isCompany is true', () => {})
        it('should create a address, when company the isCompany is false', () => {})
    })

    describe('Match to snapshot', () => {
        it('should create a address, when company the isCompany is true', () => {})
        it('should create a address, when company the isCompany is false', () => {})
    })
})

const createAllRandomAddress = (isCompany = false): Address => ({
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    country: faker.location.country(),
    zipCode: faker.location.zipCode(),
    name: faker.name.fullName(),
    company: isCompany ? faker.company.name() : undefined,
})

describe('Object matching of createAllRandomAddress', () => {
    describe('Match to object', () => {
        it('should create a address, when company the isCompany is true', () => {})
        it('should create a address, when company the isCompany is false', () => {})
    })

    describe('Match to snapshot', () => {
        it('should create a address, when company the isCompany is true', () => {})
        it('should create a address, when company the isCompany is false', () => {})
    })
})

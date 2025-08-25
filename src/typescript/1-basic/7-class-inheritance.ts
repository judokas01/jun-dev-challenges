// ! DO NOT MODIFY: this is a expected data format
type AnimalProperties = {
    species: string
    weightInKilograms: number
    allowedFood: string[]
}

/**
 * 1. Create a class representing an Animal.
 * The Animal has three basic properties:
 * - species: string - what type of animal is it? Is it a dog? This should be a property that is easy to identify.
 * - stomachCapacity: number - number of items that can be found inside its stomach. This is only internal information.
 * - allowedFood: string[] - list (array) of allowed food items.
 *
 * It's up to you what type of properties (public, private, protected) these should be.
 *
 * 2. The Animal class should have the following methods:
 * - eat    - this method should receive a string of food. First, it will validate if there is any free space inside the animal's stomach.
 *           - it should also validate if the food is something that the animal eats (this should be a "helper" function).
 *           - if everything passes, it should store the food inside the animal's stomach.
 *
 * - sleep  - this method should receive an argument of sleep duration in hours, and for every hour the animal sleeps, it should remove one item from its stomach.
 *
 * Oh, before I forget - in the type AnimalProperties, there is no stomachCapacity property.
 * But we can safely assume that weight is proportional to stomachCapacity. Stomach capacity is 1/10 of weight in kilograms, rounded up.
 * I leave the solution to you.
 *
 */

class Animal {}

/**
 * Second part of this challenge:
 *
 * Create a classes that will extend the Animal class.
 *
 * 1) Average American - he needs so much more food.
 *      - his stomachCapacity is much bigger its only 1/3 of his weight
 *      - also he is getting more hungry in his sleep - when he sleeps it removes 20 items for every hours of his sleep.
 *
 * 2) Mayfly - has no stomach. The whole eating is redundant.
 *
 * 3) Jellyfish - it is transparent, so there should be a way, how to see content of its stomach. (Yes I know that jellyfish does not have a stomach.)
 *
 */

/**
 * Third part:
 *
 * Create interfaces and all this but when implementing the interfaces
 */

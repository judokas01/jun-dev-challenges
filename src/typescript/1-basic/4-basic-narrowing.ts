/**
 * There is a test for this file, run: `npm run test src/typescript/1-basic/4-basic-narrowing.spec.ts`
 * Fill this method to do the following:
 * 1. Check if the argument is `undefined`, if so return 'I am undefined'
 * 2. Check if the argument is `null`, if so return 'I am null'
 * 3. Check if the argument is a `string`, if so return 'I am a string'
 * 4. Check if the argument is a `number`, if so return 'I am a number'
 * 5. Check if the argument is a `boolean`, if so return 'I am a boolean'
 * 6. If the argument is none of the above, return 'What the hell I am?'
 */

export const baseNarrowMe = (arg: unknown): string => {
    if (arg === undefined) return 'I am undefined'
    if (arg === null) return 'I am null'
    if (typeof arg === 'string') return 'I am a string'
    if (typeof arg === 'number') return 'I am a number'
    if (typeof arg === 'boolean') return 'I am a boolean'
    return 'What the hell I am?'
}

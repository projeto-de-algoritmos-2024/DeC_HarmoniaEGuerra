/**
 * Create a promise to wait for `ms` miliseconds.
 * @param {number} ms 
 * @returns {Promise<void>}
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
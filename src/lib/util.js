/**
 * Clamps a number
 * @param {number} number
 * @param {number} lower
 * @param {number} upper
 * @returns {number}
 */
export function clamp(number, lower, upper) {
  // Check if NaN
  if (number === number) {
    // Check upper
    number = number <= upper ? number : upper;
    // Check lower
    number = number >= lower ? number : lower;
  }
  return number;
}
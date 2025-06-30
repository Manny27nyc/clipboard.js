// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
export default function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}

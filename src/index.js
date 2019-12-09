/** @module handlebars-helper-json */

/**
 * Handlebars helper that returns given number with a possibly pluralized noun
 * @function
 * @returns {string} Compiled text
 * @example
 * import Handlebars from "handlebars"
 * import handlebarsHelperJson from "handlebars-helper-json"
 * const handlebars = Handlebars.create()
 * handlebars.registerHelper("plural", handlebarsHelperJson)
 * const template = handlebars.compile("I have {{plural bananas 'banana' 'bananas'}}!")
 * const result = template({bananas: 4})
 * result === "I have 4 bananas!"
 */
export default (...args) => {
  const {data, hash} = args.pop()
  const [input] = args
  return JSON.stringify(input)
}
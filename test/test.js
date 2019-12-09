import Handlebars from "handlebars"
import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
   * @type { import("../src") }
   */
const {default: handlebarsHelperJson} = indexModule

const handlebars = Handlebars.create()
handlebars.registerHelper("json", handlebarsHelperJson)

it("should run", () => {
  const template = handlebars.compile("Hello {{{json name}}}!")
  expect(template({name: "Anna"})).toBe("Hello \"Anna\"!")
  expect(template({name: true})).toBe("Hello true!")
  expect(template({name: "1"})).toBe("Hello \"1\"!")
  expect(template({name: 1})).toBe("Hello 1!")
})
const index = require("./index")
// @ponicode
describe("index.default", () => {
    test("0", () => {
        let param1 = [[-5.48, -5.48, -100], [100, 1, -100], [-5.48, 1, -100]]
        let callFunction = () => {
            index.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[0, -5.48, -5.48], [1, 1, -5.48], [-100, 100, -5.48]]
        let callFunction = () => {
            index.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[1, 1, -5.48], [-5.48, -5.48, 0], [-100, -5.48, -5.48]]
        let callFunction = () => {
            index.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[1, 0, 1], [-5.48, -100, -5.48], [-100, 1, 0]]
        let callFunction = () => {
            index.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[-100, -5.48, 0], [0, 100, 1], [1, 100, 100]]
        let callFunction = () => {
            index.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

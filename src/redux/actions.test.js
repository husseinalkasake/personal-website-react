const actions = require("./actions")
// @ponicode
describe("actions.showMoreInfo", () => {
    test("0", () => {
        let callFunction = () => {
            actions.showMoreInfo(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.showMoreInfo(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.showMoreInfo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.showSideMenu", () => {
    test("0", () => {
        let callFunction = () => {
            actions.showSideMenu(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.showSideMenu(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.showSideMenu(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.closeMenus", () => {
    test("0", () => {
        let callFunction = () => {
            actions.closeMenus()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.updateMoreInfoKey", () => {
    test("0", () => {
        let callFunction = () => {
            actions.updateMoreInfoKey(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.updateMoreInfoKey(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.updateMoreInfoKey(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

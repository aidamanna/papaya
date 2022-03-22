import { dummy } from "../src/dummy"

describe("dummy test", () => {
    it("should pass", () => {
        expect(dummy()).toBe("holi")
    })
})
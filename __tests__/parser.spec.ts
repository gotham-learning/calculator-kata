import { parseInput } from "../src/parser"
describe("#parser", () => {
  it("should call plus function when user input is 3 + 2", () => {
    expect(parseInput("3 + 2")).toBe("3 + 2 = 5")
  })
})

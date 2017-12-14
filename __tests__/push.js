import push from "../src/push";

const next = push({
    dispatch: jest.fn(),
    getState: jest.fn()
});

test("returns a function to handle next", () => {
    expect(JSON.stringify(next)).toEqual(JSON.stringify(jest.fn()));
});

describe("handle action", () => {
    it("passes an action to next", finished => {
        const result = {};

        const actionHandler = next(action => {
            expect(action).toEqual(result);
            finished();
        });

        actionHandler(result);
    });

    it("will return a value", () => {
        const expected = "test";
        const action = next(() => "test");

        const result = action(e => e);
        expect(result).toEqual(expected);
    });
});

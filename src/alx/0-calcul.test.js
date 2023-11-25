const assert = require('assert');
const calculateNumber = require('./0-calcul');
describe('calculateNumber', () => {
    it('gets floating point args returns whole numbers', () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3)
    });
    it('rounds down b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.0, 2.4), 3)
    });
    it("rounds down a and b's floating point fractional number", () => {
        assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    });
    it("rounds down a's floating point fractional number", () => {
        assert.strictEqual(calculateNumber(1.4, 2), 3);
    })
    it("rounds up b's floating point fractional number", () => {
        assert.strictEqual(calculateNumber(1.4, 2.5), 4);
    })
    it("rounds up a and b's floating point fractional number", () => {
        assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    })
    it("rounds up a's floating point fractional number", () => {
        assert.strictEqual(calculateNumber(1.5, 2), 4);
    })
    it("rounds down a and b floating point fractional numbers with trailling 9's", () => {
        assert.strictEqual(calculateNumber(2.49999, 3.49999), 5)
    })
})
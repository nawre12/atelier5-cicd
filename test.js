const assert = require('assert');
const { addition } = require('./index');

assert.strictEqual(addition(2, 3), 5);
assert.strictEqual(addition(10, 5), 15);

console.log('Tous les tests sont reussis !');

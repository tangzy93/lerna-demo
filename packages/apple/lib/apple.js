'use strict';

const banana = require('banana');

module.exports = {
    apple,
    appleAndBanana
};

function apple(a, b) {
    // TODO
    return a + b;
}

function appleAndBanana(a, b) {
    return `${apple(a, b)} and ${banana(a, b)}, and hello world`
}
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = planetWeight;
function planetWeight(weight, planet) {
    var neptuneG = 11.15;
    var earthG = 9.9;
    var marsG = 3.71;
    return calculate(weight, planet);

    function calculate(weight, planet) {
        if (planet === 'neptune') return (parseInt(weight) / earthG * neptuneG).toFixed(2);
        if (planet === 'mars') return (parseInt(weight) / earthG * marsG).toFixed(2);
    }
}
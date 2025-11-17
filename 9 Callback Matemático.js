function calcular(a, b, callback) {
    return callback(a, b);
}

console.log(calcular(5, 3, (a, b) => a + b));
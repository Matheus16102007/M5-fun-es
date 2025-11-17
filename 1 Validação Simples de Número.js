function validarNumero(n) {
    if (typeof n === 'number') {
        return true;
    } else {
        throw new Error('O parâmetro deve ser um número.');
    }
}
console.log(validarNumero(5)); // true
// console.log(validarNumero('a')); // Erro
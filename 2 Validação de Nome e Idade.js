function validarUsuario(nome, idade) {
    if (typeof nome === 'string' && nome.trim() !== '' && typeof idade === 'number' && idade >= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(validarUsuario('João', 25)); // true
// console.log(validarUsuario('', -5)); // false
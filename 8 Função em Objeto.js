const usuario = {
    nome: 'Matheus',
    sayHi: function() {
        return "Olá, " + this.nome;
    }
};

console.log(usuario.sayHi());
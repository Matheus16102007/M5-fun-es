const obj = {
    nome: 'João',
    // Método tradicional
    dizerIssoTradicional: function() {
        console.log('Tradicional:', this.nome);
    },
    // Método arrow
    dizerIssoArrow: () => {
        console.log('Arrow:', this.nome);  // 'this' refere-se ao contexto léxico (provavelmente undefined ou window)
    }
};

//obj.dizerIssoTradicional();
obj.dizerIssoArrow();
// Análise: Em funções arrow, 'this' não é vinculado ao objeto, mas ao contexto onde foi definida (escopo léxico).
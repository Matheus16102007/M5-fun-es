const operacoes = [
    (a, b) => a + b,
    (a, b) => a - b,  
    (a, b) => a * b   
];

operacoes.forEach(op => {
    console.log(op(4, 2));
});

function formatarMensagem(msg, formatador) {
    return formatador(msg);
}

console.log(formatarMensagem('hello', str => str.toUpperCase())); 
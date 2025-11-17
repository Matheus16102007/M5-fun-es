function requisicaoFalsa(url, callback) {
    setTimeout(() => {
        callback(null, "OK");
    }, 1000);
}

requisicaoFalsa('url1', (err, data) => {
    console.log('Primeira requisição:', data);
    requisicaoFalsa('url2', (err, data) => {
        console.log('Segunda requisição:', data);
        requisicaoFalsa('url3', (err, data) => {
            console.log('Terceira requisição:', data);
        });
    });
});

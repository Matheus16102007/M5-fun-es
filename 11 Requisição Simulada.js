function requisicaoFalsa(url, callback) {
    setTimeout(() => {
        callback(null, "OK");
    }, 1000);
}

requisicaoFalsa('http://example.com', (err, data) => console.log(data)); 
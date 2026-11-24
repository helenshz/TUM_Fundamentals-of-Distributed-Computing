const express = require('express');

const app = express();
const port = 3000;

app.get('/factorial/:a', function(req, res) {

    const n = BigInt(req.params.a);
    let result = 1n; //BigInt
    for (let current = 1n; current <= n; current++) {
        result = current * result;
    }
        res.send(result.toString());
});

app.listen(port);
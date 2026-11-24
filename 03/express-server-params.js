const express = require('express');

const app = express();
const port = 3000;

app.get('/fruit/:fruitName/:fruitColor', function(req, res) {
    let data = {
        "fruit": {
            "name": req.params.fruitName,
            "color": req.params.fruitColor
        }
    };

    res.send(data);
});

app.listen(port);

const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('Hello World!');
});

app.get('/xml', (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.send('<message>Hello World!</message>');
});

app.get('/html', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('<h1>Hello World!</h1>');
});

app.get('/unauthorized', (req, res) => {
    res.status(401);
    res.send('This resource requires authentication!');
})

app.get('/forbidden', (req, res) => {
    res.status(403);
    res.send('This resource is forbidden!');
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
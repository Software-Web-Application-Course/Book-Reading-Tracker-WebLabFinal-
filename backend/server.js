const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('server running at port: 3000');
})

app.get('/books', (req, res) => {
    res.json([
        {id: 1, title:"Clean Code", author: "Robert C. Martin"},
        { id: 2, title:"Eloquent JavaScript", author:"MarijnHaverbeke"},
        {id: 3, title:"Refactoring", author: "Martin Fowler"},
    ])
});

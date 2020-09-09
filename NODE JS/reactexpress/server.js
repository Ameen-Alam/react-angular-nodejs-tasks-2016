const express = require("express");
const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: "Ameen", lastName: "Alam" },
        { id: 2, firstName: "Waqar", lastName: "Mughal" },
        { id: 3, firstName: "Ali", lastName: "Hamza" }
    ];

    res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server Started on Port${port}`));
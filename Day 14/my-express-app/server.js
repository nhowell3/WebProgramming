const express = require('express');
const app = express();

// Sample Data
const users = [
    {id: 1, name: "Alice", admin: false},
    {id: 2, name: "Bob", admin: false},
    {id: 3, name: "Overload", admin: true},
];

const products = [
    {id: 1, name: "Laptop", price: 999, soldOut: false},
    {id: 2, name: "Phone", price: 699, soldOut: true},
];

const reviews = [
    {id: 1, productId: 1, rating: 5},
    {id: 2, productId: 2, rating: 3},
]

const sales = [
    {id: 1, productId: 1, numSold: 1000},
    {id: 2, productId: 2, numSold: 1500},
]

// Routing...

app.get("/", (req, res) => res.send("Welceom to my API!"));

app.get("/users", (req,res)=> res.json(users));
app.get("/users/admins", (req,res)=> res.json(getAdmins()));

app.get("/products", (req,res)=> res.json(products));
app.get("/products/reviews", (req,res)=> res.json(reviews));
app.get("/products/sales", (req,res)=> res.json(sales));
app.get("/products/soldout", (req,res)=> res.json(getSoldOut()));

// Start Server...
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

// Functions

function getAdmins(){
    let admins = []
    for (let i = 0; i < users.length; i++){
        if (users[i].admin === true){
            admins.push(users[i])
        }
    }
    return admins;
}

function getSoldOut(){
    let soldProducts = []
    for (let i = 0; i < products.length; i++){
        if (products[i].soldOut === true){
            soldProducts.push(products[i])
        }
    }
    return soldProducts;
}
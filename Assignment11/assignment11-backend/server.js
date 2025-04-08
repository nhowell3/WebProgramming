require("dotenv").config();
const express = require("express");
const {Pool} = require("pg");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// POSTGRESQL Connections...
const poolHobby = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_HOBBIES,
    port: process.env.DB_PORT,
});

const poolPersonal = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PERSONAL,
    port: process.env.DB_PORT,
});

// GET all hobbies
app.get("/hobbies", async (req, res) => {
    try {
        const result = await poolHobby.query("SELECT * FROM hobbies");
        res.json(result.rows);
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

// GET all personal information
app.get("/personal", async (req, res) => {
    try {
        const result = await poolPersonal.query("SELECT * FROM personal_information");
        res.json(result.rows);
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
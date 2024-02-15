import express from "express"
import ViteExpress from "vite-express"
import Products from "./Products.json"

const app = express()

app.get("/products", (req, res) => {
    res.json(Products)
})

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000...")
)

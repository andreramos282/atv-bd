const express = require("express")
const mongoose = require("mongoose")

const app = express()
mongoose.connect("mongodb://127.0.0.1:27017/rede_games")

const Produto = mongoose.model("Produto", new mongoose.Schema({
  nome: String,
  preco: Number,
  categoria: String,
  estoque: Number,
  desconto: Number
}))

app.get("/", async (req, res) => {
  const produtos = await Produto.find({}, { nome: 1, preco: 1, _id: 0 }).limit(5)
  res.json(produtos)
})

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"))

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { getAll, getById, create, updateItem, deleteItem } = require('./Controller/Authors');
const router = express.Router();

const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://Abinash:${process.env.PASS}@cluster0.dsoul8f.mongodb.net/?retryWrites=true&w=majority`);
  console.log('Successfully connected with database');
}
app.use(express.json());
app.use('/', router);

router.get('/', getAll).get('/:id', getById).post('/', create).patch('/:id', updateItem).delete('/:id', deleteItem);

app.listen(8888);

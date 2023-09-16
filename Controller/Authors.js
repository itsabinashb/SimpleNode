const { authors } = require('../Model/AuthorCollection');

exports.getAll = async function (req, res) {
  res.json(await authors.find());
};

exports.getById = async function (req, res) {
  const id = req.params.id;
  res.json(await authors.findById(id).exec());
};

exports.create = async function (req, res) {
  const author = new authors(req.body);        // Creating new document in 'authors' collection
  await author.save();
  res.json(author);
};

exports.updateItem = async function (req, res) {
  const id = req.params.id;
  await authors.findByIdAndUpdate(id, { quote: '⭐️⭐️⭐️⭐️⭐️' });
  res.send('Successfully updated');
};

exports.deleteItem = async function (req, res) {
  const id = req.param.id;
  await authors.findByIdAndDelete(id)
  res.send("Successfully deleted")
};

const fs = require("fs");

const categoriesFolder = "./var/task/server/public/uploads/categories";
const customizeFolder = "/var/task/server/public/uploads/customize";
const productsFolder = "/var/task/server/public/uploads/products";

const CreateAllFolder = () => {
  if (!fs.existsSync(categoriesFolder)) {
    fs.mkdirSync(categoriesFolder, {
      recursive: true}, err => {}
    );
  }

  if (!fs.existsSync(customizeFolder)) {
    fs.mkdirSync(customizeFolder, {
      recursive: true,
    });
  }

  if (!fs.existsSync(productsFolder)) {
    fs.mkdirSync(productsFolder, {
      recursive: true,
    });
  }
};

module.exports = CreateAllFolder;

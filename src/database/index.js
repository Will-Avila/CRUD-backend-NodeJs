const Sequelize = require('sequelize');
const configDB = require('../config/database');

const Produtos = require('../models/Produtos');

const connection = new Sequelize(configDB);

Produtos.init(connection);

module.exports = connection;
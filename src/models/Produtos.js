const {Model, DataTypes} = require('sequelize');

class Produtos extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.DECIMAL,
            estoque: DataTypes.INTEGER,
        }, {
            sequelize
        });
    }
}

module.exports = Produtos;
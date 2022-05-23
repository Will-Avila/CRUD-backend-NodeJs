const Produtos = require('../models/Produtos');

module.exports = {
    async createProduto(req, res) {
        try {
            const { nome, preco, estoque } = req.body;

            const produto = await Produtos.findOne({ where: { nome } });

            if (produto) {
                res.status(401).json({ message: "Já existe um produto com esse nome" });
            } else {
                const produto = await Produtos.create({ nome, preco, estoque });

                res.status(200).json({ produto });
            }

        } catch (error) {
            res.status(400).json({ error });
        }
    },
    async updateProduto(req, res) {
        try {
            const { id } = req.params;
            const { nome, preco, estoque } = req.body;

            const produto = await Produtos.findOne({ where: { id } });

            if (!produto) {
                res.status(401).json({ message: "Nenhum produto encontrado" });
            } else {
                const produto = await Produtos.update({ nome, preco, estoque }, { where: { id } });

                res.status(200).json( produto );
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    async listProdutos(req, res) {
        try {
            const produtos = await Produtos.findAll();

            if (!produtos) {
                res.status(401).json({ message: "Não existe produtos cadastrados" });
            }

            res.status(200).json(produtos);
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    async deleteProduto(req, res) {
        const { id } = req.params;

        const produto = await Produtos.findOne({ where: { id } });
        if (!produto) {
            res.status(401).json({ message: "Produto não encontrado" });
        } else {
            await Produtos.destroy({ where: { id } });
            res.status(200).json({ ok: true });
        }
    }
}
import categoriaModel from "../models/categoria.model.js";

const categoriaController = {

    criarCategoria: async (req, res) => {
        try {
            console.log(req.body);

            const { descricaoCategoria} = req.body;

            if (descricaoCategoria == undefined) {
                return res.status(400).json({ erro: 'Campos OBRIGATÓRIOS não preenchidos' });
            }

            await categoriaModel.insert(descricaoCategoria);

            res.status(201).json({ message: 'Categoria cadastrada com sucesso!' });

        } catch (error) {
            console.error('Erro ao cadastrar categoria!', error);
            res.status(500).json({ erro: 'Erro no servidor ao cadastrar categoria' });
        }
    },

    listarCategorias: async (req, res) => {
        try {
            const { idCategoria } = req.query;

            if (idCategoria) {
                const categoria = await categoriaModel.buscarUm(idCategoria);
                return res.status(200).json(categoria);
            } else {
                const categorias = await categoriaModel.buscarTodos();
                return res.status(200).json(categorias);
            }

        } catch (error) {
            console.error('Erro ao listar categorias:', error);
            res.status(500).json({ erro: 'Erro ao buscar categoria' });
        }
    },

    deletarCategoria: async (req, res) => {
        try {
            const { idCategoria } = req.params;

            await categoriaModel.deletarCategoria(idCategoria);

            res.status(200).json({ message: "Categoria deletada com sucesso!" });

        } catch (error) {
            console.error('Erro ao deletar categoria:', error);
            res.status(500).json({ erro: "Erro no servidor ao deletar categoria" });
        }
    },

    atualizarCategoria: async (req, res) => {
        try {
            const { idCategoria } = req.params;
            const { descricaoCategoria, dataCad } = req.body;

            const categoria = await categoriaModel.buscarUm(idCategoria);

            if (!categoria || categoria.length === 0) {
                return res.status(404).json({ erro: 'Categoria não encontrada!' });
            }

            const categoriaAtual = categoria[0];

            const descricaoAtualizada = descricaoCategoria || categoriaAtual.descricaoCategoria;
            const dataAtualizada = dataCad || categoriaAtual.dataCad;

            await categoriaModel.atualizarCategoria(idCategoria, descricaoAtualizada, dataAtualizada);

            res.status(200).json({ message: 'Categoria atualizada com sucesso!' });

        } catch (error) {
            console.error('Erro ao atualizar categoria:', error);
            res.status(500).json({ erro: 'Erro no servidor ao atualizar categoria' });
        }
    }
};

export default categoriaController;
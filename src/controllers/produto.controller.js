import produtoModel from "../models/produto.model.js";
const produtoController = {
    criarProduto: async (req, res) => {
        try {
    console.log (req.body)
            const { idCategoria, nomeProduto, valorProduto, vinculoImagem} = req.body;

            if (idCategoria == undefined || nomeProduto == undefined || valorProduto == undefined || isNaN(valorProduto) || vinculoImagem == undefined) {
                return res.status(400).json({ erro: 'campos OBRIGATÓRIOS não preenchidos' })
            }

            await produtoModel.insert( idCategoria, nomeProduto, valorProduto, vinculoImagem);

            res.status(201).json({ message: 'produto cadastrado com sucesso!' });

        } catch (error) {
            console.error('erro ao cadastrar o produto!', error)
            res.status(500).json({ error: 'erro no servidor ao cadastrar o produto' });
        }
    },

    listarProdutos: async (req, res) => {
        try {
            const { idProduto } = req.query;
          
            if(idProduto){
const produto = await produtoModel.buscarUm(idProduto);

                return res.status(200).json(produto);
            }else {
                const produtos = await produtoModel.buscarTodos();
                return res.status(200).json(produtos);
            }

        } catch (error) {
            console.error('erro ao listar produtos:', error);
            res.status(500).json({ message: 'Error ao buscar produto' })
        }
    },

    deletarProduto: async (req, res) => {
        try {

            const { idProduto } = req.params;

            await produtoModel.deletarProduto(idProduto);

            res.status(200).json({ message: "Produto deletado com sucesso!" })

        } catch (error) {
            console.error('Erro ao deletar produto', error);
            res.status(500).json({ erro: "Erro no servidor ao deletar o produto" });
        }
    },
     atualizarProduto: async (req, res) => {
        try {
            const { idProduto } = req.params;
            const { nomeProduto, valorProduto, dataCad } = req.body;

            const produto = await produtoModel.buscarUm(idProduto);

            if (idProduto.length != 36) {
                return res.status(404).json({ erro: 'Produto não encontrado!' });
            }

            const produtoAtual = produto[0];

            const nomeAtualizado = nomeProduto || produtoAtual.nomeProduto;
            const precoAtualizado = valorProduto || produtoAtual.valorProduto;
            const dataCadAtualizada = dataCad || produtoAtual.dataCad;

            await produtoModel.atualizarProduto(idProduto, nomeAtualizado, precoAtualizado, dataCadAtualizada);

            res.status(200).json({ message: 'Produto atualizado com sucesso!' })
        } catch (error) {
            console.error('Erro ao atualizar o produto:', error);
            res.status(500).json({ erro: 'Erro no servidor ao atualizar o produto' });
        }
    }
}

export default produtoController
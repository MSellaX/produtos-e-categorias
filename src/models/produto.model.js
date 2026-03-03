import pool from "../config/db.js";

const produtoModel = {

    insert: async (idCategoria, nomeProduto, valorProduto, vinculoImagem) => {
        try {
            const sql = `
                INSERT INTO produto 
                (idCategoria, nomeProduto, valorProduto, vinculoImagem) 
                VALUES (?, ?, ?, ?)
            `;

            const values = [idCategoria, nomeProduto, valorProduto, vinculoImagem];

            const [result] = await pool.execute(sql, values);
            return result;

        } catch (error) {
            console.error("Erro ao inserir produto:", error);
            throw error;
        }
    },

    buscarTodos: async () => {
        try {
            const sql = "SELECT * FROM produto";
            const [rows] = await pool.execute(sql);
            return rows;

        } catch (error) {
            console.error("Erro ao buscar produtos:", error);     
            throw error;
        }
    },      

    buscarUm: async (idProduto) => {
        try {
            const sql = "SELECT * FROM produto WHERE idProduto = ?";
            const [rows] = await pool.execute(sql, [idProduto]);
            return rows;

        } catch (error) {
            console.error("Erro ao buscar o produto:", error);
            throw error;
        }
    },

    deletarProduto: async (idProduto) => {
        try {
            const sql = "DELETE FROM produto WHERE idProduto = ?";
            const [result] = await pool.execute(sql, [idProduto]);
            return result;

        } catch (error) {
            console.error("Erro ao deletar o produto:", error);
            throw error;
        }
    },

    atualizarProduto: async (idProduto, nomeProduto, valorProduto) => {
        try {
            const sql = `
                UPDATE produto
                SET nomeProduto = ?, 
                    valorProduto = ?, 
                    WHERE idProduto = ?
            `;

            const values = [nomeProduto, valorProduto, idProduto];

            const [result] = await pool.execute(sql, values);
            return result;

        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            throw error;
        }
    }

};

export default produtoModel;
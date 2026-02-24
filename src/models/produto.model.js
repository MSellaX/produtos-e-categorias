import pool from "../config/db.js";

const produtoModel = {
    insert:async (idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad) => {
        const sql = 'INSERT INTO produto (idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad) VALUES (?,?,?,?,?)';
        const values = [idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad]
        const [rows] = await pool.execute (sql, values);
        return rows
    }, 
    buscarTodos: async ()=>{
        try{

            const sql = 'SELECT * FROM produto';
        const [rows] = await pool.execute (sql);
        return rows

            } catch (error) {
                console.error('error ao buscar produtos', error)
                throw error; 
        }
    },

    buscarUm: async (idProduto) => {
        try {
            const sql = 'SELECT * FROM produto WHERE idProduto = ?';
        const values = [idProduto]
        const [rows] = await pool.execute (sql, values);
        return rows

        } catch (error) {
            console.error('erro ao buscar o produto:', error);
            throw error;
        }
    },

    deletarProduto: async (idProduto) => {
        try {
            const sql = 'DELETE FROM produto WHERE idProduto = ?';
        const values = [idProduto]
        const [rows] = await pool.execute (sql, values);
        return rows

        } catch (error) {
            console.error('erro ao deletar o produto:', error);
            throw error;
        }
    }
}

export default produtoModel
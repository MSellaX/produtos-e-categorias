import pool from "../config/db.js";

const categoriaModel = {

    insert: async (descricaoCategoria) => {
        const sql = `
            INSERT INTO categoria (descricaoCategoria)
            VALUES (?)
        `;
        const values = [descricaoCategoria];

        const [rows] = await pool.execute(sql, values);
        return rows;
    },

    buscarTodos: async () => {
        try {
            const sql = 'SELECT * FROM categoria';
            const [rows] = await pool.execute(sql);
            return rows;

        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
            throw error;
        }
    },

    buscarUm: async (idCategoria) => {
        try {
            const sql = 'SELECT * FROM categoria WHERE idCategoria = ?';
            const values = [idCategoria];

            const [rows] = await pool.execute(sql, values);
            return rows;

        } catch (error) {
            console.error('Erro ao buscar categoria:', error);
            throw error;
        }
    },

    deletarCategoria: async (idCategoria) => {
        try {
            const sql = 'DELETE FROM categoria WHERE idCategoria = ?';
            const values = [idCategoria];

            const [rows] = await pool.execute(sql, values);
            return rows;

        } catch (error) {
            console.error('Erro ao deletar categoria:', error);
            throw error;
        }
    },

    atualizarCategoria: async (idCategoria, descricaoCategoria, dataCad) => {
        try {
            const sql = `
                UPDATE categoria
                SET descricaoCategoria = ?, dataCad = ?
                WHERE idCategoria = ?
            `;

            const values = [descricaoCategoria, dataCad, idCategoria];

            const [rows] = await pool.execute(sql, values);
            return rows;

        } catch (error) {
            console.error('Erro ao atualizar categoria:', error);
            throw error;
        }
    }
};

export default categoriaModel;
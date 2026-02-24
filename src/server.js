import express from 'express';
import produtoRoutes from './routes/produtos.routes.js';
import "dotenv/config"


const app = express();
app.use(express.json());
app.use('/', produtoRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
})
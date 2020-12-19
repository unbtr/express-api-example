import express from 'express';
import productsRoutes from './routes/produsts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Example API listening at http://localhost:${PORT}`);
});

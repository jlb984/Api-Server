import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import clienteRoutes from './routes/clienteRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/clientes', clienteRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenidos a la api de JLB!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

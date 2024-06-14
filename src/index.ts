import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import clienteRoutes from './routes/clienteRoutes';
import { promises as fs } from 'fs';


const app = express();
const port = 3000;
const FILE_PATH = './clientes.json';

app.use(express.json());
app.use('/api', userRoutes);
app.use('/clientes', clienteRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenidos a la api de JLB!');
});

// Crear el archivo clients.json si no existe
fs.access(FILE_PATH)
  .catch(() => fs.writeFile(FILE_PATH, '[]'))
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error creating the JSON file:', error);
  });

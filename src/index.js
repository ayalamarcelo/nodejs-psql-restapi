import express from 'express';
import usersRoutes from './routes/users.routes.js';
import { PORT } from './config.js';

const app = express();

app.use(usersRoutes);

app.listen(PORT);
console.log('Server on port', PORT);
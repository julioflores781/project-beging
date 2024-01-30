import  express  from 'express';
import morgan from 'morgan';
import cors from  'cors'
import indexRoutes from './routes/index.routes.js';
import productoRoutes from './routes/producto.routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(indexRoutes);
app.use(productoRoutes);
app.use(morgan('dev'));

export default app;

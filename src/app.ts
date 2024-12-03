import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandlers';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api', router);

//test route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

//GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

//not found route
app.use(notFound);

export default app;

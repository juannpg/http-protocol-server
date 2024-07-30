import cors from 'cors'
import express from 'express'
import hijosRouter from './routers/hijos';
import hijosGetRouter from './routers/hijosGet';
import hijosPatchRouter from './routers/hijosPatch';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  })
);
app.use("/api/routers/hijos", hijosRouter);
app.use("/api/routers/hijosGet", hijosGetRouter);
app.use("/api/routers/hijosPatch", hijosPatchRouter);

const PORT = 1407;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
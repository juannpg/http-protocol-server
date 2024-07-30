import cors from 'cors'
import express from 'express'
import postRouter from './routers/postFile';
import getRouter from './routers/getFile';
import patchRouter from './routers/patchFile';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  })
);
app.use("/api/routers/postFile", postRouter);
app.use("/api/routers/getFile", getRouter);
app.use("/api/routers/patchFile", patchRouter);

const PORT = 1407;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
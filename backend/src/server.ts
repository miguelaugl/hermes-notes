import express from 'express';
import 'express-async-errors';
import './database';
import multer from 'multer';
import path from 'path';

import uploadConfig from './config/multer';
import { EHttpCodes } from './enums/EHttpCodes';
import { Exception } from './errors/Exception';
import { errorHandler } from './middlewares/errorHandler';
import { Nota } from './models/Nota';

const upload = multer(uploadConfig);

const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.use('/files', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/notas', async (request, response) => {
  const notas = await Nota.find();
  return response.status(EHttpCodes.SUCESSO).json(notas);
});

app.delete('/deletar-todas', async (request, response) => {
  await Nota.deleteMany();
  return response.status(EHttpCodes.SEM_RETORNO).send();
});

app.delete('/deletar-nota/:id', async (request, response) => {
  const { id } = request.params;
  await Nota.findByIdAndDelete(id);
  return response.status(EHttpCodes.SEM_RETORNO).send();
});

app.patch('/editar-nota/:id', async (request, response) => {
  const { id } = request.params;

  const nota = await Nota.findById(id);

  if (!nota) {
    throw new Exception('Nota não encontrada', EHttpCodes.REQUISICAO_RUIM);
  }

  nota.texto = request.body?.texto || nota.texto;

  await nota.save();

  return response.status(EHttpCodes.CRIADO).json(nota);
});

app.post('/criar-nota', upload.single('foto'), async (request, response) => {
  const { texto } = request.body;

  console.log(request.file);

  const foto = request.file?.filename;

  const nota = await Nota.create({ texto, foto });

  return response.status(EHttpCodes.CRIADO).json(nota);
});

app.use(errorHandler);

app.listen(port, () => console.log(`🔥 Server running at port: ${port}`));

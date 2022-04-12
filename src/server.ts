import { NextFunction, Request, Response } from 'express';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
import wilderControl from './controllers/WilderController';
const app = express();

//Database
mongoose
  .connect('mongodb://127.0.0.1:27017/wilderdb', {
    autoIndex: true,
  })
  .then(() => console.log('connected to database'))
  .catch((err: unknown) => console.log(err));

app.use(express.json());
app.use(cors());

app.post('/api/wilder/create', wilderControl.create);
app.get('/api/wilder/read', wilderControl.read);
app.put('/api/wilder/update/:id', wilderControl.updateOne);
app.delete('/api/wilder/delete/:id', wilderControl.deleteById);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Sorry, can't find that!");
});

//Start Server
app.listen(5000, () => console.log('Server started on 5000'));

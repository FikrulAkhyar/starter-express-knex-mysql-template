import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import db from './src/configs/db';
import fileUpload from 'express-fileupload';
import { authenticateJWT } from './src/utils/jwt.utils';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const port = parseInt(process.env.PORT || '3000', 10);
const { NODE_ENV } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const routesDirectory = path.resolve(__dirname, './src/routers/');
const routeFiles = fs
  .readdirSync(routesDirectory)
  .filter((file) => file.endsWith('.route.js'));

Promise.all(
  routeFiles.map(async (file) => {
    const routePath = `/${file.replace('.route.js', '')}`;
    const routeHandler = await import(path.join(routesDirectory, file));
    app.use(routePath, routeHandler.default || routeHandler);
  })
).then(() => {
  app.listen(port, () => {
    console.log(`Active Port: ${port}`);
    console.log(`Environment: ${NODE_ENV || 'development'}`);
  });
}).catch((error) => {
  console.error('Error loading routes:', error);
});

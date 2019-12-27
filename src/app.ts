import express from "express";
import morgan from "morgan";
import indexRoutes from './routes/index';
import path from 'path';
const app = express();

//settings
app.set("port", process.env.PORT || 4000);
//middlewares
app.use(morgan("dev"));
app.use(express.json());
//routes
app.use( "/api",indexRoutes);
//this folder for this application will be used to store public files
app.use( "/uploads", express.static(path.resolve("uploads")));
export default app;


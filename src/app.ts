import express from "express";
import morgan from "morgan";
import indexRoutes from './routes/index';
const app = express();

//settings
app.set("port", process.env.PORT || 3000);
//middlewares
app.use(morgan("dev"));
//routes
app.use("./api",indexRoutes);
export default app;


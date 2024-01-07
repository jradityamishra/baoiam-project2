import express from "express";
const app = express();
//import Route
import authRoute from './authRoute.js';

// use imported route
app.use('/auth',authRoute);

export default app;
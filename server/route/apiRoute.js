import express from "express";
const app = express();
//import Route
import authRoute from './authRoute.js';
import course from './courseRoute.js';

// use imported route
app.use('/auth', authRoute);
app.use('/course', course);


export default app;
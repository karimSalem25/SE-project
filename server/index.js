
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js'
import gradeRoutes from './routes/grades.js'
import userRoutes from './routes/user.js'
import courseRoutes from './routes/course.js'
const app = express();


app.use(bodyParser.json({limit: "20mb" , extended: "true"}))
app.use(bodyParser.urlencoded({limit: "20mb" , extended: "true"}))

app.use(cors());
app.use('/students' , studentRoutes);
app.use('/grades' , gradeRoutes);
app.use('/users' , userRoutes);
app.use('/course' , courseRoutes);

const CONNECTION_URL = 'mongodb+srv://karimsalem25:ko@25102001@cluster0.e3rym.mongodb.net/database1?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log('Connection is established and running on port: ' + PORT)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify' , false);


import express from 'express'
import bodyParser from 'body-parser'
import { Sequelize } from 'sequelize';
import router from './routes/gigs'
// import {db} from './config/database';
const app = express();

export const db = new Sequelize('codegig', 'postgres', 'postgres', {
    host: "localhost",
    // localhost or IP address of your database server, e.g.: 127.0.0.1
    dialect:'postgres',
    operatorsAliases: false,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
});

// testing the db connection


db.authenticate()
.then(() => console.log("Connection has been established successfully."))
.catch(err=>console.error(`Unable to connect to the database:${err}`));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('INDEX'))

//GIG routes

// app.use('/gigs', require('./routes/gigs'))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, console.log(`Server started on port ${PORT}`));



import { Sequelize } from 'sequelize';
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


import knex from 'knex';

const db = knex({
    client:'mysql',
    connection:{
        host:process.env.DB_HOST,
        user:'pizzariabanco',
        password:process.env.DB_PASS,
        database:'pizzariabanco',
        port:3306
    },
    useNullAsDefault:true,
});

export default db;
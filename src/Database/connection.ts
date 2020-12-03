import knex from 'knex';

const db = knex({
    client:'mysql',
    connection:{
        host:'pizzariabanco.mysql.dbaas.com.br',
        user:'pizzariabanco',
        password:'Joaopedro-321',
        database:'pizzariabanco',
        port:3306
    },
    useNullAsDefault:true,
});

export default db;
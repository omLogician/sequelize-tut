const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('testdb2', 'postgres', 'postom123', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize.authenticate().then(()=>{
    console.log("Success!");
}).catch(err=>{
    console.log("Error" +  err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users.js')(sequelize, DataTypes);

db.sequelize.sync({force: false}).then(()=>{
    console.log("Yes RE-SYNC DONE!");
})
const Sequelize = require('sequelize');
const sequelize = new Sequelize('wt2118703', 'root', 'password', {
   host: 'localhost',
   dialect: 'mysql',
   pool: {
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000
   }
});
const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.vjezba= require('./Vjezba.js')(sequelize);
db.zadatak=require('./Zadatak.js')(sequelize);
db.student=require('./Student.js')(sequelize);
db.grupa=require('./Grupa.js')(sequelize);

db.vjezba.hasMany(db.zadatak,{as: 'vjezbaId'});

module.exports=db;
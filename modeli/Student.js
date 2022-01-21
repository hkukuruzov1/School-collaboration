const Sequelize=require("sequelize");
module.exports=function(sequelize,DataTypes){
    const Student=sequelize.define("student",{
        ime:{
            type: Sequelize.STRING
        },
        prezime:{
            type: Sequelize.STRING
        },
        index:{
            type: Sequelize.STRING
        },
        grupa:{
            type: Sequelize.STRING
        }
    });
    return Student;
};
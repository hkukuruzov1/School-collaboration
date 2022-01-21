const Sequelize=require("sequelize");
module.exports=function(sequelize,DataTypes){
    const Grupa=sequelize.define("grupa",{
        naziv:{
            type: Sequelize.STRING
        }
    });
    return Grupa;
};
const sequelize = require('../db')
const {DataTypes}=require('sequelize')

const User = sequelize.define('user', {
  id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
  nick:{type: DataTypes.STRING, unique:true},
  score:{type: DataTypes.INTEGER, defaultValue:0}
})




module.exports = {User}
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const Sequelize = require("sequelize");


module.exports = function(sequelize, DataTypes) {
    const Player = sequelize.define("Player", {
      
    name  : DataTypes.STRING,
    email : DataTypes.STRING,
      
    });
  
    return Player;
  };
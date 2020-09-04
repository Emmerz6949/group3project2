/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */

module.exports = function(sequelize, DataTypes) {
    const Player = sequelize.define("Player", {
      
    name  : DataTypes.STRING,
    email : DataTypes.STRING,
      
    });
  
    Player.associate = function(models) {
      Player.hasMany(models.Score, {});
    };

    return Player;
  };

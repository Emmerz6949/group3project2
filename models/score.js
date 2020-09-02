/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */

const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) 
{
	const Score = sequelilze.define("score",
	{
		name:
		{
			type: DataTypes.SRING,
			allowNull: false,
			validate:
			{
				len:[1,30]
			}
		},

		score:
			{
				type: DataTypes.INTEGER,
				allowNull: false,
				isInt: true
			}			  
	});
	
	Score.associate = function(models)
	{
		Score.belongsTo(models.Category, 
		{
			foreignKey: 
			{
				allowNull: false				
			}
    	});
	  };

   Score_table.sync();

  return Score;
};

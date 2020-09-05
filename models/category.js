module.exports = function(sequelize, DataTypes) {
    const Category = sequelize.define("Category",{
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        api_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true
            }
        }
    });

    Category.associate = function(models) {
        Category.hasMany(models.Score, {});
    };

    return Category;
};

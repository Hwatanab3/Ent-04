const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Favorite = sequelize.define('favorite', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Favorite;
const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const History = sequelize.define('history', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: DataTypes.INTEGER,
    event: DataTypes.ENUM('create', 'update'),
    time: DataTypes.DATE
}, {
    timestamps: false,
    tableName: 'history'
})


module.exports = History
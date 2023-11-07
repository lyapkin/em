const History = require('../models/history')
const sequelize = require('../db')
const { QueryTypes } = require('sequelize')

class HistoryDAO {

    async getHistory(userId, page = 1) {

        let query
    
        if (userId === undefined) {

            query = `SELECT * FROM history
                    LIMIT 10
                    OFFSET ${(page - 1) * 10}`

        } else {

            query = `SELECT * FROM history
                    WHERE "userId" = ${userId}
                    LIMIT 10
                    OFFSET ${(page - 1) * 10}`

        }
    
        return await sequelize.query(query, {type: QueryTypes.SELECT})

    }

    async createHistory(data) {

        await History.create(data)
        
    }

}

module.exports = new HistoryDAO()

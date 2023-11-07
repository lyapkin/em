const historyDAO = require('../dao/historyDAO')

class HistoryController {

    async get(req, res) {

        try {

            const history = await historyDAO.getHistory(req.query.id, req.query.page)
            res.json(history)

        } catch (e) {
            console.log(e)
            res.status(500).send()
        }

    }

    async create(req, res) {

        try {

            const result = await historyDAO.createHistory(req.body)
            res.status(201).send()

        } catch (e) {
            console.log(e)
            res.status(500).send()
        }

    }

}

module.exports = new HistoryController()
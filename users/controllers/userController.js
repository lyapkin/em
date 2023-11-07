const User = require('../models/users')
const { CREATE, UPDATE } = require('../const/event')
const sendChangeService = require('../services/sendChangeService')

class UserController {

    async getAll(req, res) {

        try {

            const users = await User.findAll()
            res.json(users)

        } catch(e) {
            console.log(e)
            res.status(500).send()
        }

    }

    async create(req, res) {

        try {
            
            const user = await User.create(req.body)
            res.status(201).send()
            
            sendChangeService(CREATE, user)
            
        } catch (e) {
            console.log(e)
            res.status(500).send()
        }

    }

    async update(req, res) {

        try {

            const result = await User.update(req.body, {where: {id: req.params.id}, returning: true})
            if (result[0] === 0) {
                
                res.status(404).send()
                
            } else {
                
                const user = result[1][0].dataValues
                res.send()
                
                sendChangeService(UPDATE, user)
                
            }

        } catch(e) {
            console.log(e)
            res.status(500).send()
        }

    }

}

module.exports = new UserController()
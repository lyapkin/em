require('dotenv').config()
const sequelize = require('./db')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8081

const history = require('./routes/history')

app.use(express.json())

app.use('/', history)

const start = async () => {

    try {

        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => {
            console.log('App running on port ' + PORT)
        })
        
    } catch (e) {
        console.log(e)
    }
}

start()


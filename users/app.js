require('dotenv').config()
const sequelize = require('./db')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const users = require('./routes/users')

app.use(express.json())

app.use('/users', users)

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


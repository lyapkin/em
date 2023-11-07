const axios = require('axios')

module.exports = async (event, user) => {

    await axios.post(process.env.HISTORY_SERVICE, {
        userId: user.id,
        event,
        time: user.createdAt
    })

}
const mongoose = require('mongoose')
const suscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedTochannel: {
        type: String,
        required: true
    },
    subscriberDate: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('subscriber', suscriberSchema)

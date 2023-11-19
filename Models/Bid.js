const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    auction_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auction',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    bid_amount: {
        type: Number,
        required: [true, "Bid amount is required"],
    }
}, {
    toJSON:{
        virtuals: true,
    },
    toObject:{
        virtuals: true,
    },
    timestamps: true,
})





//compile schema into model
const Bid = mongoose.model('Bid', bidSchema);
module.exports = Bid;
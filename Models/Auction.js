const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, "Product Id is required"],
    },
    start_time: {
        type: Date,
        required: [true, "Start Time is required"],
    },
    end_time: {
        type: Date,
        required: [true, "End Time is required"],
    },
    status: {
        type: String,
        default: "Open",  //Open or Closed
    },
    current_bid_price: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Price',
    },
    winner_bidder_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

})

//compile schema into model
const Auction = mongoose.model('Auction', auctionSchema);
module.exports = Auction;
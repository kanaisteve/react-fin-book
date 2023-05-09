import mongoose from 'mongoose'

const Schema = mongoose.Schema

// categories = field => ['type', 'color']
const category_model = new Schema({
    type: {type: String, default: "Savings"},
    color: {type: String, default: '#fcbe44'}
})

// transactions => field => ['name', 'type', 'amount', 'date']
const transaction_model = new Schema({
    name: {type: String, default: "Anonymous"},
    type: {type: String, default: "Savings"},
    amount: {type: Number},
    date: {type: Date, default: Date.now}
})

const Categories = mongoose.model('categories', category_model)
const Transaction =  mongoose.model('transaction', transaction_model)

export default {
    Categories,
    Transaction
}
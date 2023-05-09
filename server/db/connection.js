import mongoose from 'mongoose'

const conn = mongoose.connect(process.env.ATLAS_URI)
    .then(db => {
        console.log('Database connected...')
        return db
    }).catch(error => {
        console.log('Connection Error...')
    })

export default conn
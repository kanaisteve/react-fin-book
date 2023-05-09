import express from 'express'
import controller from '../controller/controller.js'

const routes = express.Router()

routes.route('/api/categories')
    .get(controller.create_categories)


// module.exports = routes;
export default routes
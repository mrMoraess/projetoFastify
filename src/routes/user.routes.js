const userController = require("../controllers/userController")

async function routes (fastify, opt) {
    fastify.post('/', userController.createUser)
    fastify.post('/find-user', userController.getUser)
    fastify.get('/get-users', userController.getAllUsers)
}

module.exports = routes;
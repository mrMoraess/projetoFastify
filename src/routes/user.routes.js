const userController = require("../controllers/userController")

async function routes (fastify, opt) {
    fastify.post('/', userController.createUser)
}

module.exports = routes;
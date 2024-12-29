const userController = require("../controllers/userController")

async function routes (fastify, opt) {
    fastify.post('/', userController.createUser)
    fastify.post('/find-user', userController.getUser)
    fastify.get('/get-users', userController.getAllUsers)
    fastify.put('/update-user', userController.updateUser)
    fastify.delete('/delete-user', userController.deleteUser)
}

module.exports = routes;


async function routes (fastify, opt) {
    fastify.get('/', async (request, reply) => {
        return { msg: "Item routes" }
    })
}

module.exports = routes;
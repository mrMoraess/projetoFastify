const fastify = require("fastify")({logger: true})

fastify.register(require("./routes/user.routes"), { prefix: "/api/user" })
fastify.register(require("./routes/itens.routes"), { prefix: "/api/itens" })

fastify.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root:root@localhost:3306/project'
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '127.0.0.1' }, (err, address) => {
            if (err) {
              fastify.log.error(err)
              process.exit(1)
            }
          })
        fastify.log.info(`Server is running at http://localhost:3000`)
    } catch(err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
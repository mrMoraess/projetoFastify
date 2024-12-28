const mysqlConn = require("../config/database")

async function getAllUsers () {

}

async function getUser () {

}

async function createUser (request, reply) {
    const {name, password} = request.body;

    const connection = await mysqlConn.DATABASE.getConnection();

    try {
        const result = await connection.execute(
            'INSERT INTO user (name, password) VALUES (?, ?)', [name, password],
        )
        reply.send({msg: "User created", result})
        connection.release();
    } catch(e) {
        reply.code(500).send(e)
    }

}

async function uptadeUser () {

}  

async function deleteUser () {

}

module.exports = {
    createUser
}
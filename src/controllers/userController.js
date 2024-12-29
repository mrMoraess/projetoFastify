const mysqlConn = require("../config/database")

async function getAllUsers (request, reply) {
    const connection = await mysqlConn.DATABASE.getConnection();
    const [rows] = await connection.execute(
        'SELECT * FROM user'
    )
    reply.send(rows || {msg: "There is no users"})
}

async function getUser (request, reply) {
    const {id} = request.body;

    const connection = await mysqlConn.DATABASE.getConnection();
    const [rows] = await connection.execute(
        'SELECT * FROM user WHERE id = ?', [id]
    )
    reply.send(rows[0] || {msg: "User not found"})

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
    createUser,
    getUser,
    getAllUsers
}
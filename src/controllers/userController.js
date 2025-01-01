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

async function updateUser (request, reply) {
    const {id, name, password} = request.body;
    const connection = await mysqlConn.DATABASE.getConnection();

    const [rows] = await connection.execute(
        'SELECT * FROM user WHERE id = ?', [id]
    )

    if (rows.length > 0) {
        const result = await connection.execute(
            'UPDATE user SET name = ?, password = ? WHERE id = ?', [name || rows[0].name, password || rows[0].password, id]
        )
        reply.send({msg: result})
    } else {
        reply.code(404).send({msg: "Usuário inexistente"})
    }

}  

async function deleteUser (request, reply) {

    const {id} = request.body;
    const connection = await mysqlConn.DATABASE.getConnection();
    const result = await connection.execute("DELETE FROM user WHERE id = ?", [id])
    reply.send(result)

}

module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
}
// Importar a dependência do SQLite 3.
const sqlite3 = require('sqlite3').verbose()

// Criar o objeto que irá fazer operações no banco de dados.
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

// Utilizar o objeto de banco de dados para nossas operações.
/*
db.serialize(() => {
    // Utilizando comandos SQL:
    // Criar uma tabela.
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // Inserir dados na tabela.
    const query = `
        INSERT INTO places (
            image, name, address, address2, state, city, items
        ) VALUES (
            ?, ?, ?, ?, ?, ?, ?
        )
    `

    const values = [
        'https://images.pexels.com/photos/7191423/pexels-photo-7191423.jpeg?cs=srgb&dl=pexels-cottonbro-7191423.jpg&fm=jpg',
        'Papersider',
        'Guilherme Gemballa, Jardin América',
        'Nº 260',
        'Santa Catarina',
        'Rio do Sul',
        'Papéis e Papelão'
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err);
        }

        console.log('Cadastrado com sucesso');
        console.log(this);
    }

    // Executa a inserção dos dados.
    db.run(query, values, afterInsertData)

    // Consultar os dados da tabela.
    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err);
        }
        console.log('Aqui estão seus registros:');
        console.log(rows);
    })

    // Deletar um dado da tabela.
    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Registro deletado com sucesso!');
    })

})
*/

db.all(`SELECT * FROM places`, function(err, rows) {
    if (err) {
        return console.log(err);
    }
    console.log('Aqui estão seus registros:');
    console.log(rows);
})
import mysql from 'mysql2'

const conexao = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    // port
    password: '',
    database: ''
})

conexao.connect((error) => {
    if(error) return console.log({mensagem: 'Falha ao conectar-se com o banco'})
    console.log({mensagem: "Conexao bem sucedida"})
})
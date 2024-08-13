import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const conexao = mysql.createConnection({
  user: process.env.user,
  host: process.env.host,
  // port
  password: process.env.password,
  database: process.env.database,
});

conexao.connect((error) => {
    if(error) return console.log({mensagem: 'Falha ao conectar-se com o banco'})
    console.log({mensagem: "Conexao bem sucedida"})
})

export const consulta = (sql, valores = '', mensagem) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resposta) => {
            if(erro) return reject({mensagem: mensagem})
            
            const row = JSON.parse(JSON.stringify(resposta))
            return resolve(row)
        })
    })
}

export default conexao
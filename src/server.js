import app from './index.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
    if(error) return console.log({mensagem: error})
    console.log({mensagem: `Servido rodando em http://localhost:${PORT}`})
})
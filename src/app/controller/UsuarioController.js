import UsuarioRepository from "../repositories/UsuarioRepository.js"
class UsuarioController {
  async store(req, res, next) {
    const usuario = req.body
    const row = await UsuarioRepository.create(usuario)

    const response = {
      mensagem: "Usuario cadastrado com sucesso",
      UsuarioCriado: {
        id_usuario: req.body.id_usuario,
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
      }
    };
     res.status(201).json(response)
  }

  async show(req, res, next) {
    const row = await UsuarioRepository.findAll()

    const response = {
      Usuario: row.map(user => {
        return{
        id_usuario: user.id_usuario,
        nome: user.nome,
        email: user.email,
        idade: user.idade,
        }
      })
    };

    res.status(200).json(row);
  }

  async findId(req, res, next) {
    const id = req.params.id
    const row = await UsuarioRepository.findById(id)

  }

  async update(req, res, next) {
    const id = req.params.id
    const usuario = req.body
    const row = await UsuarioRepository.update(usuario,id)
  }

  async delete(req, res, next) {
    const id = req.params.id
    const row = await UsuarioRepository.delete(id)

    res.status(200).json(row)
  }
}

export default new UsuarioController()
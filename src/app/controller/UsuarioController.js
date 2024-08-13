import UsuarioRepository from "../repositories/UsuarioRepository.js"
class UsuarioController {
  async store(req, res, next) {
    const usuario = req.body
    const row = await UsuarioRepository.create(usuario)

    const response = {
      mensagem: "Usuario vadastrado com sucesso",
      UsuarioCriado: {
        id_usuario: req.body.id_usuario,
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
      }
    };
    res.status(201).send(response)
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

    res.status(200).json(response);
  }

  async findId(req, res, next) {
    const id = req.body.id_usuario
    const row = await UsuarioRepository.findId(id)

  }

  async update(req, res, next) {
    const usuario = req.body
    const row = await UsuarioRepository.update(usuario)
  }

  async delete(req, res, next) {
    const id = req.body.id
    const row = await UsuarioRepository.delete(id)
  }
}

export default new UsuarioController()
import conexao ,{consulta} from '../database/conexao.js'
class UsuarioRepository{
    create(usuario){
        const sql = "INSERT INTO usuario SET ?"
        return consulta(sql, usuario, 'Não foi possível cadastrar')
    }
    findAll(){
        const sql = "SELECT *FROM usuario"
        return consulta(sql, 'Não foi possível encontrar')
    }

    findById(id){
        const sql = "SELECT *FROM usuario WHERE id_usuario=?";
        console.log(id)
        return consulta(sql,id, "Não foi possível encontrar");
    }

    update(usuario, id){
        const sql = "UPDATE usuario SET ? WHERE id_usuario=?";
        return consulta(sql, [usuario, id], "Não foi possível atualizar");
    }

    delete(id){
        const sql = "DELETE FROM usuario WHERE id_usuario=?";
        return consulta(sql, id, "Não foi possível eliminar o usuario");
    }
}

export default new UsuarioRepository()
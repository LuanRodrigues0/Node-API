import {consulta} from "../database/conexao.js"
class selecaoRepository{
    //CRUD
    create(selecao)  {
        const sql= "INSERT INTO selecoes SET ? "
        return consulta(sql, selecao, 'Não foi possível criar!')
    }

    findAll() {
        const sql= "SELECT * FROM selecoes;"
        return consulta(sql, 'seleção não encontrada!')
    }
    findById(id){
        const sql= "SELECT * FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'ID não encontrado!')
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?; "
        return consulta(sql, [selecao, id], 'não foi possível atualizar!')
    }

    delete(id){
        const sql= "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possível apagar!')
    }

}


export default new selecaoRepository()
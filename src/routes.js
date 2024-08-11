import { Router } from 'express';
import selecaoController from './app/controllers/selecaoController.js';

const router= Router()

//Indicar para o express ler o body com json
router.use(express.json())

//ROTAS
router.get('/Selecoes',selecaoController.index)

//Buscar por id
router.get('/selecoes/:id',selecaoController.show)

//Rota para Criar dados usando post
router.post('/selecoes',selecaoController.store)

//Fazer atualizações por id usando put
//Obs: o id pode ser alterado porem, não é recomendável, para garantirmos a integridade.
router.put('/selecoes/:id',selecaoController.updte)

//deletar por id
router.delete('/selecoes/:id',selecaoController.delete)


export default router
const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const tarefaValidation = require('../util/tarefaValidation')
const categoriaController = require('../controllers/categoriaController')
const categoriaValidation = require('../util/categoriaValidation')
const apiController = require('../controllers/apiController')

route.get('/descri/?'       ,   tarefaValidation.listarPorDescricao, tarefaController.listarPorDescricao)
route.get('/datas/?'        ,   tarefaValidation.listarPorDatas    , tarefaController.listarPorDatas)
route.get('/data/?'         ,  tarefaValidation.listarPorDt       , tarefaController.listarPorDt)
route.get('/pagination/?'   ,    tarefaController.listarperpage)
route.get('/categ/:id',    categoriaValidation.listarPorCategoriaId,   categoriaController.listarPorCategoriaId)
route.get('/resolvidos_pagination/?'   ,    tarefaController.listarResolvido_paginado)
route.get('/prioridade_pagination/?'   , tarefaController.listarPorPrioridade_paginado)
route.get('/deletados_pagination/?'   ,   tarefaController.listarPorDeletados)
route.get('/categoria_pagination/?'   ,   tarefaController.listarPorCategoria)
route.get('/vencidos_pagination/?'   ,    tarefaController.listarVencidos)
module.exports = route
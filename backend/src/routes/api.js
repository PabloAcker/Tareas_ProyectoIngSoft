const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/userController');
const { checkAuth } = require('../middleware/auth');
const { getSubjectsController, 
        getSubjectByIdController, 
        postSubjectController, 
        putSubjectController, 
        deleteSubjectController} = require('../controllers/subjectController');

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtener una lista de usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */
router.get('/user',  getUserController);


const SUBJECT_ROUTE = '/subjects'

router.get(SUBJECT_ROUTE, getSubjectsController);

router.get(`${SUBJECT_ROUTE}/:id`, getSubjectByIdController);

router.post(SUBJECT_ROUTE, postSubjectController);

router.put(`${SUBJECT_ROUTE}/:id`, putSubjectController);

router.delete(`${SUBJECT_ROUTE}/:id`, deleteSubjectController);

module.exports = router;
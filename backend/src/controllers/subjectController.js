const logger = require('../utils/logger');
const { getSubjectsService,
        getSubjectByIdService, 
        createSubjectService, 
        updateSubajectService, 
        deleteSubjectService
    } = require('../services/subjectService');

const getSubjectsController = async (req, res) => {
    logger.info('getSubjectsController - Req', req);
    try {
        const subjects = await getSubjectsService();
        return res.status(200).json({
            success: true,
            message: 'Subjects retrieved successfully',
            data: subjects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subjects',
            error: error.message
        })
    }
    
};

const getSubjectByIdController = async (req, res) => {
    logger.info('getSubjectByIdController - Req', req);
    const { params } = req;
    logger.info('getSubjectByIdController - Params', params);
    const { id } = params;
    logger.info('getSubjectByIdController - Id', id);
    try {
        const subject = await getSubjectByIdService(id);
        return res.status(200).json({
            success: true,
            message: 'Subject retrieved successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }
    
};

const postSubjectController = async (req, res) => {
    logger.info('postSubjectController - Req', req);
    const { body } = req;
    logger.info('postSubjectController - Body', body);
    try {
        const subject = await createSubjectService(body);
        return res.status(200).json({
            success: true,
            message: 'Subject created successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating subject',
            error: error.message
        })
    }
    
};

const putSubjectController = async (req, res) => {
    logger.info('putSubjectController - Req', req);
    const { body } = req;
    logger.info('putSubjectController - Params', params);
    const { id } = params;
    logger.info('putSubjectController - Id', id);
    try {
        const subject = await updateSubajectService(body, id);
        return res.status(200).json({
            success: true,
            message: 'Subject updated successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }
    
};

const deleteSubjectController = async (req, res) => {
    logger.info('deleteSubjectController - Req', req);
    const { params } = req;
    logger.info('deleteSubjectController - Params', params);
    const { id } = params;
    logger.info('deleteSubjectController - Id', id);
    try {
        const subject = await deleteSubjectService(id);
        return res.status(200).json({
            success: true,
            message: 'Subject deleted successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting subject',
            error: error.message
        })
    }
    
};

module.exports = { getSubjectsController, getSubjectByIdController, postSubjectController, putSubjectController, deleteSubjectController};

const logger = require('../utils/logger');

const getSubjectsController = async (req, res) => {
    logger.info('getSubjectsController - Req', req);
    try {
        //const users = await getUserService();
        return res.status(200).json({
            success: true,
            message: 'Subjects retrieved successfully',
            data: []
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
    try {
        //const users = await getUserService();
        return res.status(200).json({
            success: true,
            message: 'Subject retrieved successfully',
            data: []
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
    try {
        //const users = await getUserService();
        return res.status(200).json({
            success: true,
            message: 'Subject created successfully',
            data: []
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
    try {
        //const users = await getUserService();
        return res.status(200).json({
            success: true,
            message: 'Subject updated successfully',
            data: []
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
    try {
        //const users = await getUserService();
        return res.status(200).json({
            success: true,
            message: 'Subject deleted successfully',
            data: []
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting subject',
            error: error.message
        })
    }
    
};

module.exports = getSubjectsController;
module.exports = getSubjectByIdController;
module.exports = postSubjectController;
module.exports = putSubjectController;
module.exports = deleteSubjectController;
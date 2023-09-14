const subjectRepository = require("../repositories/subjectRepository");
const logger = require('../utils/logger');

const getSubjectsService = async () => {
  try {
    logger.info("getSubjectsService - Fetching subjects from the database"); 
    const subjects = await subjectRepository.getSubjects();
    logger.info("getSubjectsService - Subjects fetched successfully!");
    return subjects;
  } catch (error) {
    logger.error("getSubjectsService - Error fetching subjects: ", error); 
    throw error;
  }
};

const getSubjectByIdService = async (id) => {
    try {
      logger.info(`getSubjectByIdService - Fetching subject by id from the database ${id}`); 
      const subject = await subjectRepository.getSubjectById(id);
      logger.info("getSubjectByIdService - Subject fetched successfully!");
      return subject;
    } catch (error) {
      logger.error(`getSubjectByIdService - Error fetching subject by id: ${id}`, error); 
      throw error;
    }
  };

  const createSubjectService = async (subject) => {
    try {
      logger.info("createSubjectService - Fetching subject from the database"); 
      const subjectBody = await subjectRepository.createSubject(subject);
      logger.info("createSubjectService - Subject fetched successfully!");
      return subjectBody;
    } catch (error) {
      logger.error("createSubjectService - Error fetching subject", error); 
      throw error;
    }
  };

  const updateSubajectService = async (subject, id) => {
    try {
      logger.info(`updateSubajectService - Fetching subject from the database ${id}`); 
      const subjectBody = await subjectRepository.updateSubaject(subject, id);
      logger.info("updateSubajectService - Subject fetched successfully!");
      return subjectBody;
    } catch (error) {
      logger.error(`updateSubajectService - Error fetching subject: ${id}`, error); 
      throw error;
    }
  };

  const deleteSubjectService = async (id) => {
    try {
      logger.info(`deleteSubjectService - Fetching subject from the database ${id}`); 
      const subject = await subjectRepository.deleteSubject(id);
      logger.info("deleteSubjectService - Subject fetched successfully!");
      return subject;
    } catch (error) {
      logger.error(`deleteSubjectService - Error fetching subject by id: ${id}`, error); 
      throw error;
    }
  };

module.exports = { getSubjectsService, getSubjectByIdService, createSubjectService, updateSubajectService, deleteSubjectService};

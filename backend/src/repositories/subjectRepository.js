const knex = require("knex");
const pgConnection = require("../config/knex-pg");
const db = knex(pgConnection.development);
const logger = require("../utils/logger")

const SUBJECT_TABLE = 'subjects'

const getSubjects = async () => {
  try {
    const subjects = await db(SUBJECT_TABLE).select("*");
    logger.info('getSubjects response', subjects);
    const subjectJson = subjects.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor
    }));
    logger.info('subject JSON', subjectJson);
    return subjectJson;
  } catch (e) {
    logger.error('subject error', e.mesagge);
    return e;
  }
};

const getSubjectById = async (id) => {
    try {
      const subject = await db(SUBJECT_TABLE).select("*").where('id', id);
      logger.info('getSubjectById response', subject);
      const subjectJson = subject.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        credits: row.credits,
        professor: row.professor
      }));
      logger.info('subject JSON', subjectJson);
      return subjectJson;
    } catch (e) {
      logger.error('subject error', e.mesagge);
      return e;
    }
  };

  const createSubject = async (subject) => {
    try {
      const subjectResponse = await db(SUBJECT_TABLE).insert(subject).select("*");
      logger.info('createSubject response', subjectResponse);
      const subjectJson = subjectResponse.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        credits: row.credits,
        professor: row.professor
      }));
      logger.info('subject JSON', subjectJson);
      return subjectJson;
    } catch (e) {
        logger.error('create error', e.mesagge);
      return e;
    }
  };

  const updateSubaject = async (subject, id) => {
    try {
      const subjectResponse = await db(SUBJECT_TABLE).insert(subject).select("*").where('id', id);
      logger.info('updateSubaject response', subjectResponse);
      const subjectJson = subjectResponse.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        credits: row.credits,
        professor: row.professor
      }));
      logger.info('subject JSON', subjectJson);
      return subjectJson;
    } catch (e) {
      logger.error('update error', e.mesagge);
      return e;
    }
  };

  const deleteSubject = async (id) => {
    try {
      const subjectResponse = await db(SUBJECT_TABLE).select("*").where('id', id);
      logger.info('deleteSubject response', subjectResponse);
      const subjectJson = subjectResponse.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        credits: row.credits,
        professor: row.professor
      }));
      logger.info('subject JSON', subjectJson);
      return subjectJson;
    } catch (e) {
      logger.error('delete error', e.mesagge);
      return e;
    }
  };

module.exports.getSubjects = getSubjects;
module.exports.getSubjectById = getSubjectById;
module.exports.createSubject = createSubject;
module.exports.updateSubaject = updateSubaject;
module.exports.deleteSubject = deleteSubject;

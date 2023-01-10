const models = require("../../../models");
module.exports = async (source, { grade, studentId, courseId }, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  const user = await models.Grade.create({
    grade: grade,
    studentId: studentId,
    courseId: courseId,
  });

  return user;
}

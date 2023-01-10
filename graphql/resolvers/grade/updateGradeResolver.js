const models = require("../../../models");
module.exports = async (source, args, { tokenPayload }) => {
  const {
    id,
    grade,
    studentId,
    courseId,
  } = args;
  if(!tokenPayload) {
    return null;
  }

  await models.Grade.update({
    grade,
    studentId,
    courseId,
  }, {
    where: {
      id,
    }
  });

  return models.Grade.findByPk(id);
}

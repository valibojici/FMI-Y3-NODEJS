const models = require("../../../models");
module.exports = async (source, args, { tokenPayload }) => {
  const {
    id,
    name,
    professorId,
  } = args;
  if(!tokenPayload) {
    return null;
  }

  await models.Course.update({
    name,
    professorId,
  }, {
    where: {
      id,
    }
  });

  return models.Course.findByPk(id);
}

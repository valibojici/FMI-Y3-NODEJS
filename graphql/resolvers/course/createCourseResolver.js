const models = require("../../../models");
module.exports = async (source, { name, professorId }, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  const user = await models.Course.create({
    name,
    professorId,
  });

  return user;
}

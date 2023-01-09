const models = require("../../../models");
module.exports = async (source, args, { tokenPayload }) => {
  const {
    id,
    firstName,
    lastName,
    email,
  } = args;
  if(!tokenPayload) {
    return null;
  }

  await models.Professor.update({
    firstName,
    lastName,
    email
  }, {
    where: {
      id,
    }
  });

  return models.Professor.findByPk(id);
}

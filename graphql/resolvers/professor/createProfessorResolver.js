const models = require("../../../models");
module.exports = async (source, { firstName, lastName, email }, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  const user = await models.Professor.create({
    firstName,
    lastName,
    email,
  });

  return user;
}

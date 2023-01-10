const models = require("../../../models");
module.exports = (source, { id }, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  return models.Grade.destroy({
    where: {
      id,
    }
  })
}

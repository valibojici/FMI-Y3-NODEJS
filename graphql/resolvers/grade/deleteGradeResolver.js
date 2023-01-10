const models = require("../../../models");
module.exports = (source, { id }) => {
  return models.Grade.destroy({
    where: {
      id,
    }
  })
}

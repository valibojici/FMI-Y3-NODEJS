const models = require("../../models");
module.exports = (source, { id }) => {
  return models.Professor.destroy({
    where: {
      id,
    }
  })
}

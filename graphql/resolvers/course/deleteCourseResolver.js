const models = require("../../../models");
module.exports = (source, { id }) => {
  return models.Course.destroy({
    where: {
      id,
    }
  })
}

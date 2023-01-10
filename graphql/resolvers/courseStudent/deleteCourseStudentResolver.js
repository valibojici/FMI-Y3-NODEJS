const models = require("../../../models");
module.exports = async (source, { studentId, courseId }, { tokenPayload }) => {
    if (!tokenPayload) {
        return null;
    }

    return await models.CourseStudent.destroy({
        where: {
            studentId,
            courseId,
        }
    });
}

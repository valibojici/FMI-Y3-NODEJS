const models = require("../../../models");
module.exports = async (source, { studentId, courseId }, { tokenPayload }) => {
    if (!tokenPayload) {
        return null;
    }
    const courseStudent = await models.CourseStudent.findOne({
        where: {
            studentId, courseId
        }
    });

    await models.CourseStudent.destroy({
        where: {
            studentId,
            courseId,
        }
    });
    return courseStudent;
}

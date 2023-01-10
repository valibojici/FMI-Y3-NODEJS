const models = require("../../../models");
module.exports = async (source, { studentId, courseId }, { tokenPayload }) => {
    if (!tokenPayload) {
        // return null;
        throw Error("Not logged in");
    }

    const courseStudent = await models.CourseStudent.create({
        studentId,
        courseId,
    });
    console.log(courseStudent);
    return courseStudent;
}

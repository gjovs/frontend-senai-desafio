// render the template!
import fetchStudents from "../../helpers/fetchStudents.js"

class Panel {
    render = async (courseId) => {
        const response = await fetchStudents(courseId);
        const { message } = response;
        createStundentCards(message);
    }
}

export default new Panel();
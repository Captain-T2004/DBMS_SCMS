import "./CourseSelectionStyle.css";
import { courses } from "../TempData/TempData"
import CourseTable from "../CourseTable/CourseTable";
export default function CourseSelection(){
    const handleSubmit = (event) => {
        event.preventDefault(); // PREVENT PAGE RELOAD
        var { year, Branch } = document.forms[0];
        console.log(year, Branch);
        const courseData = courses.find((course) => course.department === Branch.value);
        console.log(courseData);
        if (courseData) {
            <>
            <CourseTable department={Branch} name={courseData.name} id={courseData.id} classes={courseData.classes} labs={courseData.labs}/>
            </>
            //console.log(isSubmitted); // STILL RETURN FALSE EVEN IF MATCH IS FOUND BECUASE IT IS UPDATED ASYNCHRONOUSOULY
        }
    };
    return (
        <div className="CourseSelectionForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="year">Select Year</label>
                <input type="text" id="year" name="year" placeholder="Year"/> 
                <label htmlFor="Branch">Select Branch</label>
                <select id="Branch" name="Branch">
                <option value="ECE">ECE</option>
                <option value="CSE">CSE</option>
                <option value="SM">SM</option>
                <option value="ME">ME</option>
                <option value="DS">DS</option>
                </select>
                <input type="submit" value="Submit" id="Submit"/>
            </form>
        </div>
    );
}
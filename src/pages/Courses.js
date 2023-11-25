import CourseSelection from "../Components/CourseSelection/CourseSelection";
import CourseTable from "../Components/CourseTable/CourseTable";
import Cards from "../Components/Cards/Card";
function Courses(){
    return (
        <>
            <div style={{display:"flex", flexDirection:"row"}}>
                <CourseSelection/>
            <div className="TableCourse">
                <CourseTable/>
            </div>
            </div>
            <Cards id="coursepage_card" name="Course Materials" department="link to labs folder google Drive" year="link to attandence folder on google Drive"/>
        </>
    );
}
export default Courses;
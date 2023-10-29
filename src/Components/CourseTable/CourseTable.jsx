import "./CourseTableStyle.css";
import { courses } from "../TempData/TempData"
function CourseTable(props){
    return (
        <>
            <table className="table-all">
                <thead>
                    <tr className="tableHeading">
                        <th>Course Name</th>
                        <th>Course ID</th>
                        <th>Total Number of Classes</th>
                        <th>Total Number of Labs</th>
                        <th>Department</th>
                    </tr>
                </thead>
                    <tbody>
                        {courses.map((item)=>
                            <tr key={item.department}>
                                {Object.values(item).map((val)=>(<td>{val}</td>))}
                            </tr>
                        )}
                    </tbody>
            </table>
        </>
    );
}
export default CourseTable;
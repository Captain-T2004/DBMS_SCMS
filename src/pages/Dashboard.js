import DashboardCard from "../Components/DashboardCard/DashboardCard";
import CourseTable from "../Components/CourseTable/CourseTable";
function Dashboard(){
    return (
        <>
            <h4 id="DashHeadings">ACADEMICS</h4>
            <DashboardCard Phone="9319674300" Name="Akshay Behl" Department="CSE" Year="2022" Qualification="B.Tech."/>
            <br/>
            <h4 id="DashHeadings">COURSES</h4>
            <div className="TableDashboard">
                <CourseTable />
            </div>
            <br/>
            <h4 id="DashHeadings">COLLEGE NEWS</h4>
            
        </>
    );
}
export default Dashboard;
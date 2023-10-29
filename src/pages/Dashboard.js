import DashboardCard from "../Components/DashboardCard/DashboardCard";
import RecentAnnouncements from "../Components/RecentAnnouncements/RecentAnnouncements";
import CourseTable from "../Components/CourseTable/CourseTable";
function Dashboard(props){
    console.log(props.componenets);
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
            <RecentAnnouncements />
        </>
    );
}
export default Dashboard;
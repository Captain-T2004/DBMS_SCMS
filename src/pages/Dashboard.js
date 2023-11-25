import DashboardCard from "../Components/DashboardCard/DashboardCard";
import CourseTable from "../Components/CourseTable/CourseTable";
function Dashboard(){
    return (
        <>
            <DashboardCard Phone="931967xxxx" Name={generateRandomName()} Department={getRandomBranch()} Year="2022" Qualification="B.Tech."/>
            <br/>
            <div className="TableDashboard">
                <CourseTable />
            </div>   
        </>
    );
}
export default Dashboard;
























































const Names = ["Amit Sharma", "Deepa Singh", "Karan Sharma", "Sarita Verma", "Sanjay Patel", "Ananya Gupta", "Rahul Kumar", "Shweta Gupta"];

function generateRandomName() {
  const Name = Names[Math.floor(Math.random() * Names.length)];
  return Name;
}
const branches = ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering", "Biomedical Engineering", "Environmental Science", "Physics", "Mathematics"];

function getRandomBranch() {
  const randomIndex = Math.floor(Math.random() * branches.length);
  return branches[randomIndex];
}

const randomBranch = getRandomBranch();
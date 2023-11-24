import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Result from "./pages/Result";
import Announcements from "./pages/Announcements";
import TimeTable from "./pages/Time-Table";
<<<<<<< Updated upstream
import Clubs from "./pages/Clubs";
import AccountAndSetting from "./pages/AccountAndSetting";
=======
import AccountAndSettings from "./pages/AccountAndSetting";
import Header from "./Components/Header/header";
>>>>>>> Stashed changes
import LoginPage from "./pages/LoginPage";
import CustomDashboard from "./pages/customDashboard";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import {dashComp} from "./Components/TempData/TempData";
import "./pages/allPages.css";

function App() {

  const comp = [];
  for(let i = 0; i < dashComp.length; i++){
    comp.push(dashComp[i].name);
  }
  let location = useLocation().pathname;
  return (
    <div className="page">
      {location === "/" ?"" :<Header />}
      <Routes>
        <Route path = "/" element = {<LoginPage/>}/>
        <Route path = "/dashboard" element = {<Dashboard componenets = {comp}/>} />
        <Route path = "/Courses" element = {<Courses/>}/>
        <Route path = "/Result" element = {<Result/>}/>
        <Route path = "/Announcements" element = {<Announcements/>}/>
        <Route path = "/Time-Table" element = {<TimeTable/>}/>
<<<<<<< Updated upstream
        <Route path = "/Clubs" element = {<Clubs/>}/>
        <Route path = "/AccountSettings" element = {<AccountAndSetting/>}/>
        <Route path = "/customDashboard" element = {<CustomDashboard/>}/>
=======
        <Route path = "/AccountAndSettings" element = {<AccountAndSettings/>}/>
>>>>>>> Stashed changes
      </Routes>
      {location === "/" ?"" : <Footer />}
   </div>
  );
}

export default App;

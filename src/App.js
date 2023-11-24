import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Result from "./pages/Result";
import Announcements from "./pages/Announcements";
import TimeTable from "./pages/Time-Table";
import AccountAndSettings from "./pages/AccountAndSetting";
import Header from "./Components/Header/header";
import LoginPage from "./pages/LoginPage";
import Footer from "./Components/Footer/footer";
import "./pages/allPages.css";

function App() {
  let location = useLocation().pathname;
  console.log(location);
  return (
    <div className="page">
      {location === "/" ?"" :<Header />}
      <Routes>
        <Route path = "/" element = {<LoginPage />}/>
        <Route path = "/dashboard" element = {<Dashboard />} />
        <Route path = "/Courses" element = {<Courses/>}/>
        <Route path = "/Result" element = {<Result/>}/>
        <Route path = "/Announcements" element = {<Announcements/>}/>
        <Route path = "/Time-Table" element = {<TimeTable/>}/>
        <Route path = "/AccountAndSettings" element = {<AccountAndSettings/>}/>
      </Routes>
      {location === "/" ?"" : <Footer />}
   </div>
  );
}

export default App;

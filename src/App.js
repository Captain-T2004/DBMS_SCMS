import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Result from "./pages/Result";
import Announcements from "./pages/Announcements";
import Time_Table from "./pages/Time-Table";
import Clubs from "./pages/Clubs";
import Header from "./Components/Header/header";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Dashboard />}/>
        <Route path = "/Courses" element = {<Courses/>}/>
        <Route path = "/Result" element = {<Result/>}/>
        <Route path = "/Announcements" element = {<Announcements/>}/>
        <Route path = "/Time-Table" element = {<Time_Table/>}/>
        <Route path = "/Clubs" element = {<Clubs/>}/>
      </Routes>
   </>
  );
}

export default App;

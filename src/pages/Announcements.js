import {AnnouncementsAcademics, AnnouncementsExtra,AnnouncementsClubs} from "../Components/TempData/TempData"
import { useState } from "react";
import TextCard from "../Components/TextCard/textCard"
import "./AnnouncementsCSS.css"
import { IoSchoolSharp } from "react-icons/io5";
import { GiClubs } from "react-icons/gi";
import { FaBookmark } from "react-icons/fa";
function Announcements(){

    const [showAcademics, setShowAcademics] = useState(localStorage.getItem('showAcademics'));
    const [showClubs, setShowClubs] = useState(localStorage.getItem('showClubs'));
    const [showExtras, setShowExtras] = useState(localStorage.getItem('showExtras'));
    console.log(localStorage.getItem('showClubs'));
    console.log(showClubs);
    const toggleAcademics = () => {
        setShowAcademics(!showAcademics);
        localStorage.setItem('showAcademics', !showAcademics);
    };
    const toggleClubs = () => {
        setShowClubs(!showClubs);
        localStorage.setItem('showClubs', !showClubs);
    };
    const toggleExtras = () => {
        setShowExtras(!showExtras);
        localStorage.setItem('showExtras', !showExtras);
    };
    return (
        <>  
            <div>
                <button onClick={toggleAcademics} className="btn"><IoSchoolSharp/></button>
                <button onClick={toggleClubs} className="btn"><GiClubs/></button>
                <button onClick={toggleExtras} className="btn"><FaBookmark/></button>
            </div>
            {showAcademics && <TextCard title='Academics' content={AnnouncementsAcademics} status="show"/>}
            {showClubs && <TextCard title='Clubs' content={AnnouncementsClubs} status="show"/>}
            {showExtras && <TextCard title='Extras' content={AnnouncementsExtra} status="show"/>}
        </>
    );
  }
export default Announcements;
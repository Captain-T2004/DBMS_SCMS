import { AnnouncementsTemp } from "../TempData/TempData";
import "./RecentAnnouncementStyle.css";
export default function RecentAnnouncements(){
    return (
        <div class="announcement-card">
            <div class="announcement-content">
                <h3 class="announcement-title"><u>Recent Announcements</u></h3>
                {AnnouncementsTemp.map((item)=><p class="announcement-text">{item}</p>)}
            </div>
        </div>
    );
}
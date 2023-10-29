import RecentAnnouncements from "../Components/RecentAnnouncements/RecentAnnouncements";
import AnnoncementUpload from "../Components/Announcements/AnnouncementUpload";
function Announcements(){
    return (
        <>
            <AnnoncementUpload/>
            <RecentAnnouncements/>
        </>
    );
}
export default Announcements;
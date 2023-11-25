import "./DashboardCard.css";
function DashboardCard(props){
    return (
        <div className="profile-card">
            <div className="profile-image">
                <img src="/assets/avatar.svg" alt="Profile Image" />
            </div>
            <div className="profile-details">
                <h2>{props.Name}</h2>
                <p>{props.Department}</p>
                <p>{props.Year}</p>
                <p>{props.Qualification}</p>
            </div>
        </div>
    );
}
export default DashboardCard;
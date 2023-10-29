import "./DashboardCard.css";
function DashboardCard(props){
    return (
        <div className="card">
        <div className="card-image">
            <img src="/assets/avatar.svg" alt="Card"/>
        </div>
        <div className="card-content">
            <div className="card-row">
            <h3 className="card-title">Name: {props.Name}</h3>
            <p className="card-subtitle">Department: {props.Department}</p>
            </div>
            <div className="card-row">
            <p className="card-detail">Year: {props.Year}</p>
            <p className="card-detail">Qualification: {props.Qualification}</p>
            </div>
            <p className="card-detail">Phone Number: {props.Phone}</p>
        </div>
        </div>
    );
}
export default DashboardCard;
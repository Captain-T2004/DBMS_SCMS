import "./DashboardCard.css";
function DashboardCard(props){
    return (
        <div className="card">
        <div className="card_head">
            <img src="/assets/avatar.svg" alt="Card image" className="card-image"/>
            <div className="card-row1">
            <h3 className="card-title">Name: {props.Name}</h3>
            <h3 className="card-title">Department: {props.Department}</h3>
                <div className="card-row">
                <p className="card-detail">Year: {props.Year}</p>
                <p className="card-detail">Qualification: {props.Qualification}</p>
                </div>
                <p className="card-detail">Phone Number: {props.Phone}</p>
            
            </div>
        </div>
        </div>
    );
}
export default DashboardCard;
function CourseTable(props){
    const createTable = ()=>{
        <div className="w3-container">
            <table className="w3-table-all">
                <thead>
                    <tr className="tableHeading">
                        <th>Course Name</th>
                        <th>Course ID</th>
                        <th>Total Number of Classes</th>
                        <th>Total Number of Labs</th>
                    </tr>
                </thead>
            </table>
        </div>
    };
    return (
        {createTable}
    );
}
export default CourseTable;
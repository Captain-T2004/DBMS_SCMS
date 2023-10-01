import "./CourseSelectionStyle.css";
export default function CourseSelection(){
    return (
        <div className="CourseSelectionForm">
            <form>
                <label for="year">Select Year</label>
                <input type="text" id="year" name="year" placeholder="Year"/> 
                <label for="Branch">Select Branch</label>
                <select id="Branch" name="Branch">
                <option value="ECE">ECE</option>
                <option value="CSE">CSE</option>
                <option value="SM">SM</option>
                <option value="ME">ME</option>
                <option value="DS">DS</option>
                </select>
                <input type="submit" value="Submit" id="Submit"/>
            </form>
        </div>
    );
}
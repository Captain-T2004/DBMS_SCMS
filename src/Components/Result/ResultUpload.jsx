import "./ResultUploadStyle.css";
import React from "react";
export default function ResultUpload() {
  return (
    <div className="ResultUploadForm">
      <form>
        <table>
          <tr>
            <td>
              <div className="form-gorup">
                <label htmlFor="year">Select Year</label>
                <input type="text" id="year" name="year" placeholder="Year" />
              </div>
            </td>
            <td>
              <div className="form-gorup">
                <label htmlFor="Branch">Select Branch</label>
                <select id="Branch" name="Branch">
                  <option value="ECE">ECE</option>
                  <option value="CSE">CSE</option>
                  <option value="SM">SM</option>
                  <option value="ME">ME</option>
                  <option value="DS">DS</option>
                </select>
              </div>
            </td>
            <td>
              <div className="form-gorup">
                <label htmlFor="ExamType">Select Exam Type</label>
                <select id="ExamType" name="ExamType">
                  <option value="Quiz1">Quiz1</option>
                  <option value="Quiz2">Quiz2</option>
                  <option value="MidSem">MidSem</option>
                  <option value="EndSem">EndSem</option>
                  <option value="Project">Project</option>
                  <option value="Assignment">Assignment</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="form-gorup">
                <label htmlFor="course">Course</label>
                <select id="ExamType" name="ExamType">
                  <option value="Quiz1">DSA IN C</option>
                  <option value="Quiz2">DBMS</option>
                  <option value="MidSem">Computer Oragnisation and Architecture</option>
                  <option value="EndSem">Oops In Java</option>
                  <option value="Project">Mechanics </option>
                  <option value="Assignment">Mathmetics -I</option>
                </select>
              </div>
            </td>
            <td>
            <label for="actual-btn">Choose File</label>
            <input type="file" id="actual-btn"/>
            </td>
            <td>
            <input type="submit" value="Submit" id="Submit"/>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

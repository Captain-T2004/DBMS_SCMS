import "./SettingsStyle.css";
import React from "react";
export default function SettingsChange() {
  return (
    <div className="SettingChangeForm">
      <form>
      <div className="form-gorup">
        <table>
          <tr>
            <td>
            </td>
            <td>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" />
            <label htmlFor="middlename">Middle Name</label>
            <input type="text" id="middlename" name="middlename" />
            <label htmlFor="fathername">Father Name</label>
            <input type="text" id="fathername" name="fathername" />
            <label htmlFor="contact">Contact</label>
            <input type="text" id="contact" name="contact" />
            
            
            </td>
            <td>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" />
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender">
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
              <label htmlFor="dateofbirth" >Date of Birth</label>
              <input type="date" id="dateofbirth" name="dateofbirth"/>
              <label htmlFor="email" >Email</label>
              <input type="email" id="email" name="email"/>
              <label htmlFor="citizen" >Citizenship</label>
              <input type="text" id="citizen" name="citizen"/>
              
            </td>
            
            <td></td>
          </tr>
        </table>
            
            
            
        </div>
        <input type="submit" value="Submit" id="Submit"/>
      </form>
    </div>
  );
}

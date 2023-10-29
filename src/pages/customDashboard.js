import DashboardCard from "../Components/DashboardCard/DashboardCard";
import RecentAnnouncements from "../Components/RecentAnnouncements/RecentAnnouncements";
import Box from '@mui/material/Box';
import CourseTable from "../Components/CourseTable/CourseTable";
import React, { useState } from 'react';
import "../pages/customizeDash.css";
function Dashboard(props){
    console.log(props)
    const [components, setComponents] = useState([<DashboardCard />, <CourseTable />]);

    const addComponent = (type) => {
        const newComponents = [...components, type];
        setComponents(newComponents);
    };
    
    const removeComponent = (index) => {
        const newComponents = [...components];
        newComponents.splice(index, 1);
        setComponents(newComponents);
    };

    return (
        <div>
        <h1>Dashboard</h1>
        <button onClick={() => addComponent(<DashboardCard />)}>Add Chart</button>
        <button onClick={() => addComponent(<CourseTable />)}>Add Table</button>
        <button onClick={() => addComponent(<RecentAnnouncements />)}>Add Announcements</button>
        <button onClick={() => removeComponent()}>Remove Components</button>
        <Box display="flex" flexWrap="wrap">
          {components.map((component, index) => (
            <Box key={index} flex={1} padding={1}>
              {component}
            </Box>
          ))}
        </Box>
      </div>
    );
}
export default Dashboard;
import React from 'react';
import { useState } from 'react';
import "../App.css"

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function Sidelist() {


const [emps,setEmps]=useState([
    {name:"Acti1",experience:"10+ Years"},
    {name:"Mano",experience:"2 Years"},
    {name:"Tom",experience:"5+ Years"},
])

const addRow=()=>{
    let newEmp={name:"Random User1",experience:"6 Years"}
    setEmps([...emps,newEmp])
}

const updateRow=()=>{
    let index=0
    let newEmp=emps[index]
    newEmp["name"]="Modfied User";
    emps[index]=newEmp
    setEmps([...emps])
}

const deleteRow = () => {
    //let name="Mano"
    //setEmps(emps.filter(emp => emp.name !== name))
    let copy_emp=[...emps]
    copy_emp.splice(0,1)
    setEmps(copy_emp)
}

const [selectedIndex, setSelectedIndex] = React.useState(1);

const handleListItemClick = (event, index) => {
  setSelectedIndex(index);
};

return ( 
<div >

      <div>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          
          {emps.map( (emp,index)=>(
            <ListItem disablePadding>
            <ListItemButton selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)}>
            <ListItemText primary= {emp.name}/>
            </ListItemButton>
            </ListItem>
          ))}
          
          <Divider />
        </List>
      </nav>
      
    </Box> 

      </div>

   <button onClick={addRow}>Add</button>
   <button onClick={updateRow}>Update</button>
   <button onClick={deleteRow}>Delete</button>


 </div> 
/*  <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
 <List component="nav" aria-label="main mailbox folders">
   <ListItemButton
     selected={selectedIndex === 0}
     onClick={(event) => handleListItemClick(event, 0)}
   >
     <ListItemIcon>
       <InboxIcon />
     </ListItemIcon>
     <ListItemText primary="Inbox" />
   </ListItemButton>
   <ListItemButton
     selected={selectedIndex === 1}
     onClick={(event) => handleListItemClick(event, 1)}
   >
     <ListItemIcon>
       <DraftsIcon />
     </ListItemIcon>
     <ListItemText primary="Drafts" />
   </ListItemButton>
 </List>
 <Divider />
 <List component="nav" aria-label="secondary mailbox folder">
   <ListItemButton
     selected={selectedIndex === 2}
     onClick={(event) => handleListItemClick(event, 2)}
   >
     <ListItemText primary="Trash" />
   </ListItemButton>
   <ListItemButton
     selected={selectedIndex === 3}
     onClick={(event) => handleListItemClick(event, 3)}
   >
     <ListItemText primary="Spam" />
   </ListItemButton>
 </List>
</Box> */


);
}
export default Sidelist;

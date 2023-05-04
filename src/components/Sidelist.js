import React from 'react';
import { useState } from 'react';
import "../App.css"
import Clockon from '../components/Clockon';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';



function Sidelist(props) {


var {userDetails} = props;

const [emps,setEmps]=useState([
    {name:"Activity 1",trial:"A"},
    {name:"Activity 2",trial:"B"},
    {name:"Activity 3",trial:"C"},
])

const [c,setc]=useState(["1"])

function addComponent(clickid) { 
  setc([clickid])
  
  
}
const [selectedIndex, setSelectedIndex] = React.useState(1);

const handleListItemClick = (event, index) => {
  setSelectedIndex(index);
};



return ( 
<div className="float-container">
      <div>
        {}
      </div>
      <div className="float-child1">
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
   
          {userDetails.map((item,index) => {
            
            return (
                <ListItem disablePadding>
                <ListItemButton selected={selectedIndex === index} onClick={(event) => {handleListItemClick(event, index);addComponent(item.id)}}>
                <ListItemText primary= {item.title}/>
                </ListItemButton>
                </ListItem>
            )
            })
          }         
          <Divider />
        </List>
      </nav> 
      
    </Box> 

      </div> 
 
      <div className="float-child2">
        {c.map((item, i) => ( <Clockon text={item} array={userDetails}/> ))} 
        </div> 



 </div> 


);
}
export default Sidelist;

import React from 'react';
import { useState,useEffect} from 'react';
import "../App.css"
import Clockon from '../components/Clockon';
import NewClockon from '../components/NewClockon';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import moment from 'moment';


function Sidelist(props) {
  const [isShown, setIsShown] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [curData, setCurData] = useState({});
  const [events, setEvents] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    getEvents()
  }, []);

  const getEvents = ()=>{
    fetch('/event/info', {
      method: 'POST',
      body: JSON.stringify({ userId: 66}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res=>{
      let datas = res.events.map(e => ({
        "id": e.id,
        "title": e.eventName,
        "start": moment(e.startTime).format('YYYY-MM-DD HH:mm'),
        "end": moment(e.endTime).format('YYYY-MM-DD HH:mm') ,
        "duration": e.spentTime,
        "extendedProps": {
          "description": e.eventDesc,
          "activityId": e.activityId,
          "trailId": e.trailId,
          "_id": e._id
        },
        "color": "green"
      }))
      console.log('datas', datas)
      setEvents(datas)
    })

  }


  const addEvent = async (event) => {

    let params = {
      "userId": 66,
      "trailId": events.length,
      "activityId": events.length,
      "eventName": event.title,
      "eventDesc": event.extendedProps.description,
      "startTime": moment(event.start).valueOf(),
      "endTime": moment(event.end).valueOf(),
      "spentTime": event.spenttime,
      "comment": ""
    }

    const response = await fetch('/event/add', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    getEvents()
    setOpenPopup(false)
  };

  const updateEvent = async (id, event) => {
    if (id){
      let params = {
        id: Number(id),
        "userId": 66,
        "trailId": event.extendedProps.trailId,
        "activityId": event.extendedProps.activityId,
        "eventName": event.title,
        "eventDesc": event.extendedProps.description,
        "startTime": moment(event.start).valueOf(),
        "endTime": moment(event.end).valueOf(),
        "spentTime": event.spenttime,
        "comment": ""
      }
      console.log('event', event)
      const response = await fetch(`event/update`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      getEvents()
      setOpenPopup(false)
    }
  };


var {userDetails} = props;


const [seed, setSeed] = useState(1);
const [c,setc]=useState(["1"])

function addComponent(clickid) { 
  setc([clickid])
  

}
const [selectedIndex, setSelectedIndex] = React.useState();

const handleListItemClick = (event, index) => {
  setSelectedIndex(index);
};

const reset = () => {
  setSeed(Math.random());  
}

return ( 
  <div>
   
<div className="float-container">
   
      <div className="float-child1">
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <button onClick={(event) => {(setIsShown(false))}}>New event</button>
        <List>
   
          {userDetails.map((item,index) => {
            
            return (
                <ListItem disablePadding>
                <ListItemButton selected={selectedIndex === index} onClick={(event) => {handleListItemClick(event, index);addComponent(item.id);reset();setIsShown(true);setCurData(userDetails.find(function(x) {return x.id==item.id}));console.log("sidelist type:"+curData)}}>
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
        { isShown && <Clockon key={seed} text={1} updateEvent={updateEvent} addEvent={addEvent} curData={curData}/>}
        {!isShown && <NewClockon key={seed} text={0} updateEvent={updateEvent} addEvent={addEvent}/>}
        </div> 



 </div> 
 </div>


);
}
export default Sidelist;

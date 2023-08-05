import React, { useState, useEffect} from 'react';
import Sidelist from '../components/Sidelist';
import "../App.css"
import moment from "moment";



function Dashboard() {

  const [events, setEvents] = useState([]);
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

  var myarray=events;
  console.log(myarray);
var a=0;
const [childData, setChildData] = useState("");

return ( 
 <div>
 
  <div>

 
 
        <Sidelist passChildData={setChildData} passEventdata={setEvents} userDetails={myarray}/>
     
    {/* <Sidelist/> */}
  </div>
  
  <div>
    
  </div>
  
 </div>

);
}
export default Dashboard;

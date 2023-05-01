import React, { useState } from 'react';
import Sidelist from '../components/Sidelist';
import Clockon from '../components/Clockon';
import "../App.css"



function Dashboard() {

  var myarray=[
    {id:"1",name:'Activity 4',trial:"A"},
    {id:"2",name:"Activity 2",trial:"B"},
    {id:"3",name:"Activity 3",trial:"C"},
];
var a=0;
const [childData, setChildData] = useState("");

return ( 
 <div>
 
  <div>

 
 
        <Sidelist passChildData={setChildData} userDetails={myarray}/>
     
    {/* <Sidelist/> */}
  </div>
  
  <div>
    
  </div>
  
 </div>

);
}
export default Dashboard;

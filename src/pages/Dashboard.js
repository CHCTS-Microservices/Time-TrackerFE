import React from 'react';
import Sidelist from '../components/Sidelist';
import Clockon from '../components/Clockon';
import "../App.css"



function Dashboard() {



return ( 
 <div className="float-container">
  <div className="float-child1">
    <Sidelist/>
  </div>
  
  <div className="float-child2">
    <Clockon/>
  </div>
  
 </div>

);
}
export default Dashboard;

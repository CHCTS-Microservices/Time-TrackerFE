import takt from './components/takt';
import getLocalStorage from './components/get-localstorage';
import timesheet from './components/timesheet';
// import React from 'react';
import React, { useEffect } from 'react';
import "../App.css"

const Dashboard = () => {
    useEffect(() => {
      getLocalStorage();
      takt();
      timesheet();
    }, []);

    return (
        <div         style={{
            display: 'inline'
        }}><div
            style={{
                display: 'inline'
            }}
        >
            <h1 className='list1' id='a1'>List palceholder</h1>
        </div><div
            style={{
                display: 'inline'
            }}
        >
                <h1 className='list2' id='a2'>List palceholder2</h1>
            </div></div>
        
    );
};

export default Dashboard;

import React from 'react';
// import "../App.css"
import Stopwatch from '../components/Stopwatch/Stopwatch';
import "../Styles.css"

const Dashboard = () => {
    return (
        <React.Fragment>
        <section>
        <div className="App">
        <p>
          {/* made by patmaz{" "}
          <a
            href="https://patmazurkiewicz.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            patmazurkiewicz.com
          </a> */}
        </p>
        <Stopwatch />
      </div>
        </section>
      </React.Fragment>

      );
};

export default Dashboard;

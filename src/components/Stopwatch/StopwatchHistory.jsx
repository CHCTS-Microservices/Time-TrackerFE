import React from 'react';

class StopwatchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
    };
  }

  componentDidMount() {
    this.setHistoryState();
  }

  setHistoryState = () => {
    if (localStorage.times) {
      this.setState({ history: localStorage.times.split('|') });
    } else {
      this.setState({ history: [] });
    }
  };

  saveToLocalStorage = () => {
    const { currentTimeMin, currentTimeSec, currentTimeMs } = this.props;
    const { selectedTrail, selectedStage } = this.props;
    
    const currentTime = `${this.props.formatTime(currentTimeMin)}:${this.props.formatTime(currentTimeSec)}:${this.props.formatTime(currentTimeMs, 'ms')}`;
    const trailAndStage = `Trail ${selectedTrail}, Stage ${selectedStage}`;
    
    const entry = `${Date().toString()} :: ${trailAndStage} :: ${currentTime}`;
    
    if (localStorage.times) {
      localStorage.times = entry + '|' + localStorage.times;
    } else {
      localStorage.times = entry + '|';
    }
  };

  saveTime = () => {
    if (typeof Storage !== 'undefined') {
      this.saveToLocalStorage();
    } else {
      console.error('local storage not supported');
    }
    this.setHistoryState();
  };

  resetHistory = () => {
    if (localStorage.times) {
      localStorage.removeItem('times');
    }
    this.setHistoryState();
  };

  render() {
    return (
      <div className={'stopwatch__history'}>
        <button onClick={this.saveTime}>SAVE TIME</button>
        <button onClick={this.resetHistory}>RESET HISTORY</button>
        <h3>History</h3>
        <ul>
          {this.state.history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StopwatchHistory;

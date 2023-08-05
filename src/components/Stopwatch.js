import React, { useState, useEffect } from "react";
import Timer from "./Timer/Timer.jsx";
import ControlButtons from "./ControlButtons/ControlButtons.jsx";
import moment from 'moment';

function StopWatch(props) {
const [isActive, setIsActive] = useState(false);
const [isPaused, setIsPaused] = useState(true);
const [time, setTime] = useState(props.time);

React.useEffect(() => {
	let interval = null;
	if (isActive && isPaused === false) {
	interval = setInterval(() => {
		setTime((time) => time + 10);
		console.log(time);
		props.settime(time);
	}, 10);
		
	} else {
	clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
}, [isActive, isPaused]);

const handleStart = () => {
	if(props.setstarttime){
		props.setstarttime(moment().format('YYYY-MM-DD HH:mm'))
	}
	setIsActive(true);
	setIsPaused(false);
};

const handlePauseResume = () => {
	setIsPaused(!isPaused);
	props.settime(time);
};

const handleReset = () => {
	setIsActive(false);
	setTime(props.time);
};

return (
	<div className="stop-watch">
	<Timer time={time} />
	<ControlButtons
		active={isActive}
		isPaused={isPaused}
		handleStart={handleStart}
		handlePauseResume={handlePauseResume}
		handleReset={handleReset}
	/>
	</div>
);
}

export default StopWatch;

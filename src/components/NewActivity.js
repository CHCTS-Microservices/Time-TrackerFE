import React, { useState, useEffect } from 'react';
import {
    Modal,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Snackbar,
    Alert
} from '@mui/material';
import moment from 'moment';

import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function FormModal(props) {
    const [selectedDate, handleDateChange] = useState(dayjs(new Date()));
    const [selectedTime, setSelectedTime] = useState();
    const [selectedEndTime, setSelectedEndTime] = useState();
    const [selectedActiveOption, setSelectedActiveOption] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [snackBar, setSnackBar] = useState({
        message: "",
        open: false,
    });


    useEffect(() => {
      if(props.curData.id){
          const { title, start, end, extendedProps } = props.curData
        let [option1, option2 ] = title.split(' ')
        let startTime = moment(start)
        console.log("option1 is"+option1)
        handleDateChange(startTime)
        handleTimeChange(startTime)
        handleEndTimeChange(moment(end))
        setSelectedOption(option1)
        setSelectedActiveOption(option2)
        setInputValue(extendedProps.description)
      }
    }, [props.curData]);

   

    const handleTimeChange = (val) => {
        console.log('val', val)
        setSelectedTime(val);
    };

    const handleEndTimeChange = (val) => {
        setSelectedEndTime(val);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleActiveChange = (event) => {
        setSelectedActiveOption(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        if (!selectedTime) return setSnackBar({ message: `Start Time is required!`, open: true})
        if (!selectedEndTime) return setSnackBar({ message: `End Time is required!`, open: true })
        if (!inputValue) return setSnackBar({ message: `Description is required!`, open: true })

        let params = {

            title: `${selectedOption || ''} ${selectedActiveOption || ''}`,
            start: `${selectedDate.format('YYYY-MM-DD')} ${selectedTime.format('HH:mm')}`,
            end: `${selectedDate.format('YYYY-MM-DD')} ${selectedEndTime.format('HH:mm') }`,
            extendedProps: {
                ...props.curData.extendedProps,
                description: inputValue,
                time: `${selectedDate.format('YYYY-MM-DD')}`,
            },
            color: "green"
        }
        if (props.curData.id){
            props.updateEvent(props.curData.id, params)
        }else{
            props.addEvent(params)
        }

    };
    

    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"

                        value={selectedDate}
                        onChange={handleDateChange}
                        fullWidth
                        locale="en-AU"
                        format="DD/MM/YYYY"
                    />
                    </LocalizationProvider>

                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            label="Start Time"
                            key={JSON.stringify(inputValue)}
                            value={selectedTime}
                            onChange={handleTimeChange}
                            fullWidth
                        />
                    </LocalizationProvider>

                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            label="End Time"
                            key={JSON.stringify(inputValue)}
                            value={selectedEndTime}
                            onChange={handleEndTimeChange}
                            fullWidth
                        />
                    </LocalizationProvider>

                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                    <InputLabel id="select-label" style={{ fontSize: '12px' }}>TRAIL</InputLabel>
                        <Select
                            label="TRAIL"
                            value={selectedOption}
                            onChange={handleOptionChange}
                            fullWidth
                        >
                            <MenuItem value="TrialA">Trial A</MenuItem>
                            <MenuItem value="TrialB">Trial B</MenuItem>
                            <MenuItem value="TrialC">Trial C</MenuItem>
                            <MenuItem value="TrialD">Trial D</MenuItem>
                            <MenuItem></MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                    <InputLabel id="select-label" style={{ fontSize: '12px' }}>ACTIVITY</InputLabel>
                        <Select
                            label="ACTIVITY"
                            value={selectedActiveOption}
                            onChange={handleActiveChange}
                            fullWidth
                        >
                  
                            <MenuItem key="1" value="Activity1">Activity 1</MenuItem>
                            <MenuItem key="2" value="Activity2">Activity 2</MenuItem>
                            <MenuItem key="3" value="Activity3">Activity 3</MenuItem>
                            <MenuItem key="4" value="Activity4">Activity 4</MenuItem>
                            <MenuItem></MenuItem>
                                    
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        label="Desc"
                        value={inputValue}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Button style={{marginTop: 10}} variant="contained" color="primary" onClick={handleSubmit}>
                Confirm
            </Button>
            <Snackbar open={snackBar.open} autoHideDuration={6000} onClose={() => setSnackBar({ open: false })}>
                <Alert severity="error">{snackBar.message}</Alert>
            </Snackbar>
        </div>)
}


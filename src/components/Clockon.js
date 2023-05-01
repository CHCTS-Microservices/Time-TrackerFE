import React,{ useState, useEffect } from "react";
import ReactDOM from "react-dom";
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
import Stopwatch from "./Clock/Stopwatch";
import "./Clock/styles.css";
import moment from 'moment';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export function Clockon(props) 
    {

    console.log("111")
    
    console.log(typeof props.array)
    var id = props.text

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




    const handleTimeChange = (val) => {
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
            title: `${selectedOption || ''} ${selectedActiveOption || ''} ${inputValue}`,
            // start: new Date(`${moment(selectedDate).format('YYYY-MM-DD')} ${moment(selectedTime).format('hh:mm:a') }`),
            start: selectedTime.format('YYYY-MM-DD HH:mm'),
            end: selectedEndTime.format('YYYY-MM-DD HH:mm'),
            extendedProps: {
                ...props.curData.extendedProps,
                description: inputValue,
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

    <div className="Clockon">
      <h1>The Activity id for this component is {id}</h1>
      
      
     

      <Stopwatch />
      <div style={{ padding: '20px' }}>
            <Grid container spacing={3}>
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

                <Grid item xs={12}>
                    <FormControl fullWidth>
                    <InputLabel id="select-label" style={{ fontSize: '12px' }}>TRAIL</InputLabel>
                        <Select
                            label="TRAIL"
                            value={selectedOption}
                            onChange={handleOptionChange}
                            fullWidth
                        >
                            <MenuItem value="A">A</MenuItem>
                            <MenuItem value="B">B</MenuItem>
                            <MenuItem value="C">C</MenuItem>
                            <MenuItem value="D">D</MenuItem>
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
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
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
        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Clockon />, rootElement);

export default Clockon;
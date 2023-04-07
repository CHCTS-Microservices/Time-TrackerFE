import React, { useEffect, useState, useContext } from "react";
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Dialog, DialogTitle, DialogContent, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import { Divider, Typography } from "@mui/material";
import NewActivity from "./NewActivity";


export default function (){
  const [openPopup, setOpenPopup] = useState(false);
  const [curData, setCurData] = useState({});
  const [events, setEvents] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);


  const addEvent = (event) => {
    const _events = JSON.parse(JSON.stringify(events))
    _events.push({ id: _events.length, ...event })
    setEvents(_events)
    setOpenPopup(false)
  };

  const updateEvent = (id, event) => {
    if (id){
      const _events = JSON.parse(JSON.stringify(events))
      let eventIndex = _events.findIndex(e => e.id === event.id)
      _events.splice(eventIndex, 1, { id, ...event })
      console.log()
      setEvents(_events)
      setOpenPopup(false)
    }
  };

  const onSelect = async (data) => {
  let { start, end, title, id } = data.event;
  setCurData(data.event);
  setOpenPopup(true);
};

  const handleOpenDetails = () => {
    setOpenDetails(true);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        eventClick={onSelect}
        headerToolbar={{
          center: "add dayGridMonth,timeGridWeek,timeGridDay",
        }}
        customButtons={{
          add: {
            text: "Add",
            click: () => {
              console.log("new event");
              setCurData({});
              setOpenPopup(true);
            },
          },
        }}
        events={events}
      />
      <Dialog open={openPopup}>
        <DialogTitle>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Typography variant="h4" component="span">
                {curData.id ? "Update Event" : "Create Event"}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                style={{ float: "right" }}
                aria-label="Close"
                variant="contained"
                color="error"
                endIcon={<CloseIcon />}
                onClick={() => {
                  setOpenPopup((prev) => !prev);
                }}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent dividers={true}>
          <NewActivity curData={curData} updateEvent={updateEvent} addEvent={addEvent} />
          {/* {curData.id && (
            <Button variant="contained" onClick={handleOpenDetails}>
              Edit
            </Button>
          )} */}
        </DialogContent>
      </Dialog>

      <Dialog open={openDetails}>
        <DialogTitle>
          Event Details
        </DialogTitle>
        <DialogContent>
          {/* Render event details here */}
        </DialogContent>
      </Dialog>
    </div>
  );
}

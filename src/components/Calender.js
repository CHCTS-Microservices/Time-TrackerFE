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
import moment from "moment";


export default function (){
  const [openPopup, setOpenPopup] = useState(false);
  const [curData, setCurData] = useState({});
  const [events, setEvents] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);

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


  const addEvent = async (event) => {

    let params = {
      "userId": 66,
      "trailId": events.length,
      "activityId": events.length,
      "eventName": event.title,
      "eventDesc": event.extendedProps.description,
      "startTime": moment(event.start).valueOf(),
      "endTime": moment(event.end).valueOf(),
      "spentTime": 0,
      "comment": ""
    }

    const response = await fetch('/event/add', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    getEvents()
    setOpenPopup(false)
  };

  const updateEvent = async (id, event) => {
    if (id){
      let params = {
        id: Number(id),
        "userId": 66,
        "trailId": event.extendedProps.trailId,
        "activityId": event.extendedProps.activityId,
        "eventName": event.title,
        "eventDesc": event.extendedProps.description,
        "startTime": moment(event.start).valueOf(),
        "endTime": moment(event.end).valueOf(),
        "spentTime": 0,
        "comment": ""
      }
      console.log('event', event)
      const response = await fetch(`event/update`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      getEvents()
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
            text: "Create",
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

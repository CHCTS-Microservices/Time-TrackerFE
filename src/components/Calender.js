import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { render } from 'preact/compat';


const events = [
    {
      id: 1,
      title: 'event 1',
      start: '2023-03-28T06:00:00',
      end: '2023-03-28T08:00:00',
      extendedProps: {
        department: "BioChemistry"
      },
      description: "Lecture",
      color: "green"
    },
    {
      id: 1,
      title: 'event 1',
      start: '2023-03-28T15:00:00',
      end: '2023-03-28T06:20:00',
      extendedProps: {
        department: "BioChemistry"
      },
      description: "Lecture",
      color: "green"
    },
    { 
      id: 3, 
      title: 'event 3', 
      start: '2023-03-17T00:00:00', 
    //   end: '2023-03-17T14:00:00' ,
      extendedProps: {
        department: "BioChemistry"
      },
      description: "Lecture"
    }
  ];




export default function (){
    return(
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    center: 'add dayGridMonth,timeGridWeek,timeGridDay',
                  }}
                customButtons={{
                    add: {
                        text: 'Add',
                        click: () => {
                            console.log('new event');
                            console.log(events[0].extendedProps.department);

                        },
                    },
                }}
                events={events}
            />
        </div>
     );

}
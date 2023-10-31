import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,  
} from '@fullcalendar/core';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils'

function Calendar() {
  return (
    <div>
      <Fullcalendar
        locale='pt-br'
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView={"listDay"}
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,listDay", // will normally be on the right. if RTL, will be on the left        
       }}
        buttonText={
          {
            today:    'Hoje',
            month:    'Mês',
            week:     'Semana',
            day:      'Dia',
            list:     'Agenda do dia'
          }
        }        
        
        height={"60vh"}
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        
        
        
      />
    </div>
  );
  function renderEventContent(eventContent: EventContentArg) {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </>
    )
  };

  function handleEventClick(clickInfo: EventClickArg) {    
        
      if (confirm(`Deseja realmente apagar este registro? '${clickInfo.event.title}'`) == true) {                
          clickInfo.event.remove()
      }       
  }  

}


export default Calendar;

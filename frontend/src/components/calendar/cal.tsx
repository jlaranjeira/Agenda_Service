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
//import { INITIAL_EVENTS, createEventId } from './event-utils'
import { useQuery } from 'react-query';
import ModalAgenda from '../agenda/Agendar';
import {useState} from 'react'


function Cal() {

  const [open, setOpen] = useState<boolean>(false);

  /*const state = {
    weekendsVisible: true,
    currentEvents: []
  }*/

  const { isloading, data } = useQuery({
    queryKey: ["allclients"],
    queryFn: () =>
      fetch("http://localhost:3000/tasks").then(
        (res) => res.json()
      )
  });
  

  return (
    <div>
       
      <Fullcalendar
        locale='pt-br'
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView={"listDay"}
        initialEvents={data} // alternatively, use the `events` setting to fetch from a feed
        headerToolbar={{
          start: "", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "", // will normally be on the right. if RTL, will be on the left        
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
        
        height={"40vh"}
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        dateClick={select}
        
        
        //Lista os eventos do banco de dados
        events={data}  
           
        
        
      />

<ModalAgenda 
                    isOpen={open} 
                    setOpen={setOpen}
                    title={'Agendar serviço'}
                    description={'descrição de modal'}
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
  };
  
  function select(info) {
    alert('Data selecionada: ' +  info.dateStr);
    {setOpen(!open)}  
  };

  //Sidebar

  /*function renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        
        
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({state.currentEvents.length})</h2>
          <ul>
            {state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }*/

}


export default Cal;
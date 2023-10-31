import { useState } from "react";
import ModalAgenda from "../../components/agenda/Agendar";
import Calendar from "../../components/calendar/Calendar"
//import { Calendar } from "@fullcalendar/core/index.js";
import "./home.scss"
import { Link } from "react-router-dom";
const Home = () => {
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <div className="home">
            <div className="box box1">
                
                    <p className="agendamento" onClick={() => setOpen(!open)}>Agendamento</p>
                    
                               
                

                <ModalAgenda 
                    isOpen={open} 
                    setOpen={setOpen}
                    title={'Agendar serviço'}
                    description={'descrição de modal'}
                    />

            </div>
            <div className="box box2">
            <Link to=".\services">Serviços</Link>
            </div>
            <div className="box box3">Ordens de Serviço</div>
            <div className="box box4">Agendamento</div>
            <div className="box box5">
            
                <div className="calendar">
                    <Calendar />
                </div>
                
            </div>
            <div className="box box6">
            <div className="box6-container">
                    <div className="calendar">Calendar</div>
                    <div className="osaberta">OS Abertas</div>
                    <div className="osfechada">OS Fechadas</div>
                    <div className="receita">Receitas</div>
                    <div className="despesa">Despesas</div>
                </div>
            </div>
                        
        </div>
    )
    
};

export default Home;
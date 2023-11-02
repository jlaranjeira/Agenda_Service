import { useState } from "react";
import ModalAgenda from "../../components/agenda/Agendar";
import Calendar from "../../components/calendar/Calendar"
//import { Calendar } from "@fullcalendar/core/index.js";
import "./home.scss"
import { Link } from "react-router-dom";
import Cal from "../../components/calendar/cal";
const Home = () => {
    const [open, setOpen] = useState<boolean>(false);
       
    return (
        <div className="home">
            <div className="box box1">              
                    
                    {/*<p className="agendamento" onClick={() => setOpen(!open)}>Agendamento</p>*/}

                    <Link to=".\clients">Clientes</Link>               

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
                    <div className="calendar">

                        <h3 className="agdia">Agenda do dia </h3>
                        <div>
                            <Cal />
                        </div>    

                    </div>
                    <div className="osaberta">OS Abertas</div>
                    <div className="osfechada">OS Fechadas</div>
                    <div className="receita">
                        <h4>Receitas</h4></div>
                    <div className="despesa">
                        <h4>Despesas</h4></div>
                </div>
            </div>

            <ModalAgenda 
                    isOpen={open} 
                    setOpen={setOpen}
                    title={'Agendar serviço'}
                    description={'descrição de modal'}
                    />
                        
        </div>

        
    )
    
};

export default Home;
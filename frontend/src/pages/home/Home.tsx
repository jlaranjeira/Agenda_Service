import { useState } from "react";
import ModalAgenda from "../../components/agenda/Agendar";
import Calendar from "../../components/calendar/Calendar"
//import { Calendar } from "@fullcalendar/core/index.js";
import "./home.scss"
import { Link } from "react-router-dom";
import Cal from "../../components/calendar/cal";
const Home = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [data, setData] = useState({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        title: '',
        msg: '',
        start: ''
        });

       
    return (
        <div className="home">
            <div className="box box1">              
                    
                    {/*<p className="agendamento" onClick={() => setOpen(!open)}>Agendamento</p>*/}
                    <div className="img-btn-client">
                    <Link to=".\clients">
                        <img className="btn-client" src="user.svg" alt="" />
                        Clientes
                    </Link>
                    </div>                                

            </div>

            <div className="box box2">
                <div className="img-btn-client">
                        
                    <Link to=".\services">
                        <img className="btn-client" src="wrench.svg" alt="" />
                        Serviços
                    
                    </Link>   
                </div>
            
            </div>

            <div className="box box3">
                
                <div className="img-btn-client">
                    <img className="btn-client" src="writing.svg" alt="" /> 
                    Ordem de Serviço                   
                </div>

            </div>
                

            <div className="box box4">
            <div className="img-btn-client">
                            
                    
                    <img className="btn-client" src="agenda.svg" alt="" />
                    
                    <p className="agendamento" onClick={() => setOpen(!open)}>Agendamento</p>
                    
                                       
                </div>
            </div>
            
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
                    
/>

            
                        
        </div>

        
    )
    
};

export default Home;
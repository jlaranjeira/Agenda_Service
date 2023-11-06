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

                        <h4 className="agdia">Agenda do dia </h4>

                        <div>
                            <Cal />
                        </div>    

                    </div>
                    <div className="osaberta">
                        <h4>
                           OS Abertas 
                        </h4>
                        <h1>03</h1>
                    
                    </div>
                    
                    <div className="osfechada">
                        <h4>
                           OS Fechadas 
                        </h4>
                        <h1>02</h1>
                    </div>
                    <div className="receita">
                        <div className="div-logo-receita">
                            <div className="valor-receita">
                                <h1>R$</h1>
                                <h1>500,00</h1>
                            </div>
                            <div className="div-icone-receita">
                                <img className="logo-receita" src="dinheiro.png" alt="" />
                            <h4>Receitas</h4></div>
                            </div>
                            
                            
                        </div>
                    
                        <div className="despesa">
                            <div className="div-valor-despesas">
                                <h1>R$</h1>
                                <h1>300,00</h1>
                            </div>
                            <div className="div-logo-despesas">
                                <img className="icon-despesa" src="despesa.png" alt="" />
                                <h4>Despesas</h4>                                
                            </div>                            
                            
                        </div>
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
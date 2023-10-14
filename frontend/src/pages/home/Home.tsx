import "./home.scss"
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <Link to=".\clients">
                    <p>Clientes</p>
                </Link>
            </div>
            <div className="box box2">
            <Link to=".\services">Serviços</Link>
            </div>
            <div className="box box3">Ordens de Serviço</div>
            <div className="box box4">Agendamento</div>
            <div className="box box5">
            <h2>Ordens de serviço do dia</h2>
                <p>11 de outubro de 2023</p>
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
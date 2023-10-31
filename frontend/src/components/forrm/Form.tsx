import { useState } from "react";
import axios from "axios";
import "./form.scss";


const FormAdd = () => {
    //Variavel de estado inicial
    const [data, setData] = useState({
        date: '',
        hora: '',
        name: '',
        email: '',
        telefone: '',
        adress: '',
        service: ''
        });

     // Variavel de estado da mensagem recebida do back end
     const [message, setMessage] = useState("")

        //Receber os dados dos campos do formulário
        const valueInput = (e) => setData({ ...data, [e.target.name] : e.target.value});
        //Executa a função quando o usuário no botão do formulário
        const addSchedule = async (e) => {
        
            //Bloquear o recarregamento da página  
            e.preventDefault()
            console.log ("Enviar para API");
            console.log(data);

            const headers = {
            'headers': {
                //Envia os dados em formato json
                'Content-Type': 'aplication/json'
                }
            };

            //fazer a requisição para a API utilizando o axios
            await axios.post('http://localhost:8080/agenda', data, headers).then((response) => { //Acessa esta linha quando repode com sucesso, status (200).
                //Atribui a mensagem no state message                
                //console.log(response.data.mensagem);
                setMessage(response.data.mensagem)

                //Limpar o formulário
                setData({
                    date: '',
                    hora: '',
                    name: '',
                    email: '',
                    telefone: '',
                    adress: '',
                    service: ''
                })
            }).catch((err) => { // acessa o catch quandoa API retorna erro.
                console.log(err.response.data.mensagem);
                if(err.response){
                    setMessage(err.response.data.mensagem);
                }else{
                    setMessage("Erro: Tente novamente mais tarde!");
                }
            });

        };    


    return (
        <div className="form-container">

                {message ? <p>{message}</p> : ""}

                <form className="form-add" onSubmit={addSchedule}>
                    <label>Data</label>
                    <input type="date" name="date" id="date" onChange={valueInput}/>
                    <label>Hora</label>
                    <input type="time" name="hora" id="hora" onChange={valueInput}/>
                    <label>Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome" onChange={valueInput}/>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Digite seu email" onChange={valueInput}/>
                    <label>Telefome</label>
                    <input type="tel" name="telefone" placeholder="Digite seu telefone" onChange={valueInput}/>
                    <label>Endereço</label>
                    <input type="text" name="adress" placeholder="Digite seu endereço" onChange={valueInput}/>
                    <label>Selecione o serviço</label>
                    <select name="service" id="sercice" onChange={valueInput}>
                        <option value="">Selecione um serviço</option>
                        <option value="Higienização de estofados">Higienização de estofados - R$ 200,00</option>
                        <option value="Higienização de colchão solteiro">Higienização colchão solteiro - R$ 150,00</option>
                        <option value="Higienização de colchão casal">Higienização colchão casal - R$ 250,00</option>
                        <option value="Lavagem de tapete">Lavagem de tapete - R$ 150,00</option>
                    </select>
                    <button type="submit">Enviar</button>
                        

                </form>

        </div>
    )
};

export default FormAdd;


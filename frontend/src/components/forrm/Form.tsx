import { useState } from "react";
import axios from "axios";
import "./form.scss";


const FormAdd = () => {
    //Variavel de estado inicial
    const [data, setData] = useState({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        title: '',
        msg: '',
        start: ''
        });

     // Variavel de estado da mensagem recebida do back end
     const [message, setMessage] = useState("")

        //Receber os dados dos campos do formulário
        const valueInput = (e) => setData({ ...data, [e.target.name] : e.target.value});
        //Executa a função quando o usuário clica no botão do formulário
        const addSchedule = async (e) => {
        
            //Bloquear o recarregamento da página  
            e.preventDefault();
            //console.log ("Enviar para API");
            //console.log(data);

            const headers = {
            'headers': {
                //Envia os dados em formato json
                'Content-Type': 'application/json'
                }
            };

            //fazer a requisição para a API utilizando o axios
            await axios.post('http://localhost:3000/client', data, headers).then((response) => { //Acessa esta linha quando repode com sucesso, status (200).
                //Atribui a mensagem no state message                
                //console.log(response.data.mensagem);
                setMessage(response.data.mensagem)

                //Limpar o formulário
                setData({
                    nome: '',
                    email: '',
                    telefone: '',
                    endereco: '',
                    title: '',
                    msg: '',
<<<<<<< HEAD
                    start: ''                  
=======
                    start: ''                   
>>>>>>> 4156c6b8eaf7aeb590ccfedea73e245ef33d424a
                })
            }).catch((err) => { // acessa o catch quandoa API retorna erro.
                //console.log(err.response.data.mensagem);
                if(err.response){
                    setMessage(err.response.data.mensagem);
                }else{
                    setMessage("Erro: Tente novamente mais tarde!");
                }
            });
        }    


    return (
        <div className="form-container">

                {message ? <p>{message}</p> : ""}

                <form className="form-add" onSubmit={addSchedule}>
                    <label>Data</label>
                    <input type="datetime-local" name="start" id="data" onChange={valueInput} value={data.start}/>
                    
                    <label>Nome</label>
                    <input type="text" name="nome" placeholder="Digite seu nome" onChange={valueInput} value={data.nome}/>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Digite seu email" onChange={valueInput} value={data.email}/>
                    <label>Telefome</label>
                    <input type="tel" name="telefone" placeholder="Digite seu telefone" onChange={valueInput} value={data.telefone}/>
                    <label>Endereço</label>
                    <input type="text" name="endereco" placeholder="Digite seu endereço" onChange={valueInput} value={data.endereco}/>
                    <label>Selecione o serviço</label>
                    <select name="title" id="title" onChange={valueInput} value={data.title}>
                        <option value="">Selecione um serviço</option>
                        <option value="Higienização de estofados">Higienização de estofados - R$ 200,00</option>
                        <option value="Higienização de colchão solteiro">Higienização colchão solteiro - R$ 150,00</option>
                        <option value="Higienização de colchão casal">Higienização colchão casal - R$ 250,00</option>
                        <option value="Lavagem de tapete">Lavagem de tapete - R$ 150,00</option>
                    </select>
                    <label>Observação</label>
                    <textarea name="msg" rows={3} onChange={valueInput} value={data.msg}></textarea>
                    <div className="div-btn">
                        <button className="btn-form" type="submit">Enviar</button> 
                    </div>
                                           

                </form>

        </div>
    )
};

export default FormAdd;


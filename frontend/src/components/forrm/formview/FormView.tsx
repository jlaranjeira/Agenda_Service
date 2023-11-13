import { useQuery } from "react-query";
import "./formView.scss"
import { useState, useEffect } from 'react';      
import { getValueFromValueOptions } from "@mui/x-data-grid/components/panel/filterPanel/filterPanelUtils";
import axios from "axios";
import Calendar from "../../calendar/Calendar";
 

const FormView = () => { 
    
{/*const [data, setData] = useState([])
useEffect(() => {
    axios.get(`http://localhost:3000/clients/${10}`)
    .then(res => setData(res.data))
    .then(err => console.log(err));
}, [])  */}  
    
    return (

        <div className="container-form-view">
            <div className="head-form-view">
                        <h2>Detalhes do agendamento</h2>
                    </div>

            <form className="form-view" >
                    
                    {
                        data.map((data, index) => {
<<<<<<< HEAD
                            return <div className="content-view"  key={index}>

                        <label>Data do serviço: <span>{}</span></label>                    
                        
                        <label>Nome: <span> {}</span></label>
                        
                        <label>Email: <span>{}</span></label>
                        
                        <label>Telefome: <span>{}</span></label>
                        
                        <label>Endereço: <span>{}</span></label>
                                            
                        <label>Serviço solicitado: <span>{}</span></label>
                        
                        <label>Observação: <span>{}</span></label>
                        
=======
                            return <div className="content-view"key={index}>
                                <label>Data: <span>{data.data}</span> </label>
                    
                    
                        <label>Nome: <span>{data.nome}</span></label>
                    
                        <label>Email: <span>{data.email}</span></label>
                    
                        <label>Telefome: <span>{data.telefone}</span></label>
                    
                        <label>Endereço: <span>{data.endereco}</span></label>
                    
                        <label>Selecione o serviço: <span>{data.title}</span></label>
                    
                        <   label>Observação: <span>{data.msg}</span></label>
                    
>>>>>>> 4156c6b8eaf7aeb590ccfedea73e245ef33d424a
                        <div className="div-btn-view">
                            <button className="btn-form-view-edit"  type="submit">Editar</button>
                            <button className="btn-form-view-close" type="submit">Fechar</button>  
                        </div>

                    </div>
                    

                        })
                    }
                    
                                           

                </form>

        </div>
    )
}

export default FormView;


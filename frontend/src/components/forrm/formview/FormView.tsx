import { useQuery } from "react-query";
import "./formView.scss"
import { useState, useEffect } from 'react';      
import { getValueFromValueOptions } from "@mui/x-data-grid/components/panel/filterPanel/filterPanelUtils";
import axios from "axios";
 

const FormView = () => { 
    
const [data, setData] = useState([])
useEffect(() => {
    axios.get(`http://localhost:3000/clients/${10}`)
    .then(res => setData(res.data))
    .then(err => console.log(err));
}, [])    
    
    return (

        <div className="container-form-view">
            <div className="head-form-view">
                        <h2>Detalhes do agendamento</h2>
                    </div>

            <form className="form-view" >
                    
                    {
                        data.map((data, index) => {
                            return <div key={index}>
                                <label>Data: <span>{data.id}</span> </label>
                    
                    
                        <label>Nome: <span>{data.nome}</span></label>
                    
                        <label>Email: <span>{data.email}</span></label>
                    
                        <label>Telefome: <span>{data.telefone}</span></label>
                    
                        <label>Endereço: <span>{data.endereco}</span></label>
                    
                        <label>Selecione o serviço: <span>{data.title}</span></label>
                    
                        <   label>Observação: <span>{data.msg}</span></label>
                    
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


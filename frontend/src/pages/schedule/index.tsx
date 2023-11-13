import { useState } from "react";
import FormAdd from "../../components/forrm/Form";
import FormView from "../../components/forrm/formview/FormView";
import ModalAgenda from "../../components/agenda/Agendar";

const Schedule = () => {
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

        <div className="container-form">

            

            
                <FormAdd />
            
            

        </div>

    )

    
};

export default Schedule;
import "../agenda/agendar.scss";
import FormAdd from "../forrm/Form";


interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    title: string;
    description: string;
}

const ModalAgenda = ({ isOpen, setOpen, title, description }: IModal) => {
    if (isOpen){
    return (
        <div className="background">
            
            <div className="modal">
                <h2>{title}</h2>
                <FormAdd />
                <span className="close" onClick={() => setOpen(!isOpen)}>          X
                </span>               
            </div>
        </div>
    );
    }else{
        return <></>
    }
};

export default ModalAgenda;

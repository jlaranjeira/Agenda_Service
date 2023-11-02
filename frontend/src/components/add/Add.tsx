import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
//import { useMutation, useQueryClient } from "react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;    
};

const Add = (props: Props) => {

  // TEST THE API

   /*const queryClient = useQueryClient();

   const mutation = useMutation({
     mutationFn: () => {
       return fetch(`http://localhost:300/${props.slug}`, {
         method: "post",
         mode: "cors",
         headers: {
           Accept: "application/json",
           'Content-Type': 'application/json', 
         },
         body: JSON.stringify({
          
         }), 
       });
     },
     onSuccess: (data) => {
      console.log(data)
       queryClient.invalidateQueries([`all${props.slug}s`]);
     },
   });*/

   
      

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
     
     const input = {      
      nome: ((e.currentTarget.elements[0] as HTMLInputElement).value),
      description: ((e.currentTarget.elements[1] as HTMLInputElement).value),
      price: ((e.currentTarget.elements[2] as HTMLInputElement).value)}

       fetch(`http://localhost:3000/${props.slug}`, {
         method: "post",
         mode: "cors",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json", 
         },
         body: JSON.stringify(input)})    

    //add new item    
   // mutation.mutate();
    props.setOpen(false)
    
  }; 
  
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add novo serviço</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" )
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.headerName} name={column.field}/>                
              </div>              
            ))}            
          <button>Salvar</button>          
        </form>
      </div>
    </div>
  );
  
};


export default Add;

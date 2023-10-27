import { DATA_GRID_PROPS_DEFAULT_VALUES, DataGrid, GridBody, GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useMutation, useQueryClient } from "react-query";


type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {

  // TEST THE API

   
   
   const queryClient = useQueryClient();

   const mutation = useMutation({
     mutationFn: () => {
       return fetch(`http://localhost:3000/api/${props.slug}`, {
         method: 'POST',
         body: JSON.stringify({}),
         headers: {'Content-type': 'application/json; charset=UTF-8'},        
         
       });       
       
     },
     onSuccess: () => {
       queryClient.invalidateQueries([`all${props.slug}s`]);
     },
   });

   //console.log(props.columns);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    console.log((e.currentTarget.elements[0] as HTMLInputElement).value);
    console.log((e.currentTarget.elements[1] as HTMLInputElement).value);
    console.log((e.currentTarget.elements[2] as HTMLInputElement).value);
    console.log((e.currentTarget.elements[3] as HTMLInputElement).value);
    console.log((e.currentTarget.elements[4] as HTMLInputElement).value);
    
    //add new item
    mutation.mutate();
    props.setOpen(false)
  };

  
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add novo {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" )
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.headerName} />
              </div>
            ))}
          <button>Salvar</button>
          
        </form>
      </div>
    </div>
  );
};

export default Add;

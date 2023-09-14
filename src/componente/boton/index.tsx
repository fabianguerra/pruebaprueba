interface IPorpsDate {
    title? : string;
  }
  const InputBoton = (props: IPorpsDate) => {
    return (
      <div className="text-xs border">
       
        <button title="boton" className="border bg-blue-300 my-2 mx-2 "> {props.title}</button>
      </div>
      
    );
  };
  export default InputBoton;
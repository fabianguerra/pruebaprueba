interface IPropsItems {
  title: string;
}
const InputSelect = (props: IPropsItems) => {
  return (
    <div className="text-xs border">
      <p className="w-full my-auto">
        {props.title}

        <select name="cars" id="cars" className="border bg-white">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </p>
    </div>
  );
};
export default InputSelect;

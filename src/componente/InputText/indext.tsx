interface InputText {
  text: string;
}
const InputText = (props: InputText) => {
  return (
    <>
      <div className="sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">
          {props.text}
       
        </label>
        <div className="mt-1">
          <input
            type="text"
            className=" shadow-sm focus:ring-indigo-500 border focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default InputText;

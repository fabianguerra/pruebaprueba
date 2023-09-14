import { useFormContext } from "react-hook-form";

interface IPropsItems {
  title: string;
  name: string;
}
const InputText = (props: IPropsItems) => {
  const { register } = useFormContext();

  return (
    <div className="text-xs ">
      <p className="w-full mx-2 my-auto">
        {props.title}
        <input
          type="text"
          className="border-gray-300 focus:outline-none relative
        focus:border-blue-600 border rounded-xl m-2 p-2"
          {...register(props.name!)}
        />
      </p>
    </div>
  );
};
export default InputText;

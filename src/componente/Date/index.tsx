interface IPorpsDate {
  title: string;
}
const InputDate = (props: IPorpsDate) => {
  return (
    <div className="text-xs border">
      <p className="w-full my-auto">{props.title}</p>
      <input type="date" />
    </div>
  );
};
export default InputDate;

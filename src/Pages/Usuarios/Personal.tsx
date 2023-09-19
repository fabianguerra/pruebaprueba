import InputText from "../../componente/InputText/indext";

function Personal() {
  return (
    <>
      <div className="pt-8 ">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Personal Information
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <InputText text="Nombre" />
          <InputText text=" Last name" />
          <InputText text=" Email address" />

          <InputText text="Country" />

          <InputText text=" Street address" />

          <InputText text="City " />

          <InputText text="State / Province " />
          <InputText text=" ZIP / Postal code " />
        </div>
      </div>
    </>
  );
}

export default Personal;

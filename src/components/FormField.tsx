import React from "react";

type Props = {
  label?: string;
  children: JSX.Element | JSX.Element[];
  required?: boolean;
};

const FormField = ({ label, children, required }: Props) => {
  return (
    <div className="flex flex-col">
      <div className=" flex font-semibold w-full">
        <div>{label}</div>
        {required ? <div className="text-red-500">*</div> : <div></div>}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default FormField;

import React from "react";

type Props = {
  type: string;
  name: string;
  register: any;
  validationSchema?: any;
  errors?: any;
  placeholder?: string;
  required?: boolean;
};

const FormControl = ({
  type,
  name,
  register,
  validationSchema,
  errors,
  placeholder,
  required,
}: Props) => {
  return (
    <div>
      <input
        className="p-2 rounded focus:outline-none  focus:border-yellow-400  border-2 w-full"
        type={type}
        placeholder={placeholder}
        {...register(name, validationSchema)}
        required={required}
      />
      {errors && (
        <span className="text-red-600 break-all text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default FormControl;

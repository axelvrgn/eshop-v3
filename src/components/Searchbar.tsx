import React from "react";
import { useForm } from "react-hook-form";

import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

interface IFormValues {
  search: string;
}

type Props = {
  type: string;
  placeholder?: string;
  searchGames: any;
};

const Searchbar = ({ type, placeholder, searchGames }: Props) => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const handleSearch = (data: IFormValues) => {
    searchGames(data);
  };
  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="max-w-md bg-white border border-yellow-500 rounded-full px-2 py-1 flex flex-row-reverse justify-end"
    >
      <input
        type={type}
        placeholder={placeholder}
        {...register("search")}
        className="w-10/12 ml-2 outline-none"
      />
      <button
        type="submit"
        className="w-1/12 flex justify-center text-yellow-500"
      >
        <Icon path={mdiMagnify} size={1} />
      </button>
    </form>
  );
};

export default Searchbar;

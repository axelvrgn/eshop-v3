import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Container = ({ children }: Props) => {
  return (
    <div className="w-full lg:w-10/12 mx-auto min-h-screen p-2 md:p-8">
      <main>{children}</main>
    </div>
  );
};

export default Container;

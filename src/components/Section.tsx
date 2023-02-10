import React from "react";

type Props = {
  title?: string;
  children?: JSX.Element | JSX.Element[];
};

const Section = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="text-xl">{title}</div>
      <div className="pl-4 leading-6">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Section;

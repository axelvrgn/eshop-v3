import React from "react";

import Icon from "@mdi/react";
import { mdiAlertCircleOutline } from "@mdi/js";

type Props = {
  title: string;
  type?: string;
};

const Alert = ({ title, type }: Props) => {
  return (
    <div className="flex space-x-3 items-center flex-nowrap border border-yellow-400 rounded bg-yellow-300 bg-opacity-70 p-2 text-black">
      <Icon path={mdiAlertCircleOutline} size={1} />
      <div>{title}</div>
    </div>
  );
};

export default Alert;

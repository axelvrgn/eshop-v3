import React from "react";

import Icon from "@mdi/react";
import { mdiAlertCircleOutline } from "@mdi/js";

type Props = {
  title?: string;
  content: string;
  type?: "success" | "danger" | "default";
};

export const Toast = ({ title, content, type = "default" }: Props) => {
  return (
    <div className="flex flex-wrap space-x-3 items-center border border-yellow-400 rounded bg-yellow-300 bg-opacity-70 p-2 text-black w-96">
      <Icon path={mdiAlertCircleOutline} size={1} />
      <div className="flex flex-wrap">
        <div className="font-semibold">{title}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

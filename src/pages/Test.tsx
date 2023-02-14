import React from "react";
import { Popover } from "@headlessui/react";

import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Searchbar from "../components/Searchbar";

const Test = () => {
  return (
    <div>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button>
              Solutions{" "}
              {open ? (
                <Icon path={mdiChevronDown} size={1} />
              ) : (
                <Icon path={mdiChevronUp} size={1} />
              )}
            </Popover.Button>

            {open && (
              <div>
                <Popover.Panel static>
                  <div className="grid grid-cols-2">
                    <a href="/analytics">Analytics</a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a>
                  </div>
                </Popover.Panel>
              </div>
            )}
          </>
        )}
      </Popover>
      <div></div>
    </div>
  );
};

export default Test;

import React from "react";
import { Popover } from "@headlessui/react";

import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";

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
      <div>
        <div className="p-4">
          <div className="flex items-center mr-4 mb-2">
            <input
              type="checkbox"
              id="A3-yes"
              name="A3-confirmation"
              value="yes"
              className="opacity-0 absolute h-8 w-8 hover:cursor-pointer "
            />
            <div className="bg-white border-2 border-yellow-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-yellow-500 ">
              <svg
                className="fill-current hidden w-4 h-4 text-yellow-600 pointer-events-none"
                version="1.1"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <g
                    transform="translate(-9 -11)"
                    fill="#FFFF"
                    fill-rule="nonzero"
                  >
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                  </g>
                </g>
              </svg>
            </div>
            <label htmlFor="A3-yes" className="select-none">
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;

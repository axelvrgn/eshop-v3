import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";

import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";

import { Disclosure } from "@headlessui/react";
import { platformService } from "../services/platformService";

const Test = () => {
  const [platforms, setPlatforms] = useState<any>([]);

  useEffect(() => {
    platformService
      .getAll()
      .then((res: any) => {
        setPlatforms(res.data.results);
        console.log(res.data);
      })
      .catch(function (error: string) {
        console.error(error);
      });
  }, []);
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
        <ul>
          {platforms.slice(0, 12).map((platform: any, index: number) => (
            <li key={index}>{platform.name}</li>
          ))}
        </ul>
        <Disclosure>
          <Disclosure.Button className="underline">voir plus</Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            {platforms.slice(12).map((platform: any, index: number) => (
              <p key={index}>{platform.name}</p>
            ))}
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  );
};

export default Test;

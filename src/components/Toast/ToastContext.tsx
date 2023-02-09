import {
  createContext,
  useCallback,
  useContext,
  useState,
  PropsWithChildren,
  useRef,
  ComponentProps,
} from "react";

import { Toast } from "./Toast";

type Params = ComponentProps<typeof Toast>;

const defaultPush = (toast: Params) => {};

const defaultValue = {
  pushToastRef: { current: defaultPush },
};

const ToastContext = createContext(defaultValue);

export const ToastContextProvider = ({ children }: PropsWithChildren) => {
  const pushToastRef = useRef(defaultPush);
  return (
    <ToastContext.Provider value={{ pushToastRef }}>
      <Toasts />
      {children}
    </ToastContext.Provider>
  );
};

export const useToasts = () => {
  const { pushToastRef } = useContext(ToastContext);
  return {
    pushToast: useCallback(
      (toast: Params) => {
        pushToastRef.current(toast);
      },
      [pushToastRef]
    ),
  };
};

const Toasts = () => {
  const [toasts, setToasts] = useState([] as Params[]);
  const { pushToastRef } = useContext(ToastContext);
  pushToastRef.current = (toast: Params) => {
    setToasts((v) => [...v, toast]);
    setTimeout(() => {
      setToasts((v) => v.filter((t) => t != toast));
    }, 10000);
  };
  return (
    <div className="absolute z-50 p-3 flex flex-col space-y-4 right-0">
      {toasts.map((toast, key) => (
        <Toast {...toast} key={key} />
      ))}
    </div>
  );
};

import { createContext, useState } from "react";

const AuthContext = createContext<any>({});

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

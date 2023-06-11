import { Dispatch, createContext, useContext, useState } from 'react';
interface AuthType {
  state: { user: { name: string; password: string } };
  action: { setUser: Dispatch<any> };
}
const AuthContext = createContext<AuthType>({
  state: { user: { name: '', password: '' } },
  action: { setUser: () => {} }
});

export function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<any>({ name: '', password: '' });
  return (
    // @ts-ignore
    <AuthContext.Provider value={{ state: { user }, action: { setUser } }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

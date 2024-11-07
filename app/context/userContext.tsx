import React, { createContext, useState, useContext, ReactNode } from 'react';


interface User {
  nome: string;
  email: string;
  senha: string;
  logado: boolean;
  id: number;
}


interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}


const userContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}


export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    nome: "",
    email: "",
    senha: "",
    logado: false,
    id: 0,
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}


export function useUser() {
  const context = useContext(userContext);

 
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }

  const { user, setUser } = context;
  return { user, setUser };
}
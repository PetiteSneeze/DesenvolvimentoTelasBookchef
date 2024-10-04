import React, { createContext, useState, useContext, ReactNode } from 'react';
import {Receitas} from './typesContext';

// Definindo o tipo para o contexto de usuário
interface ReceitasContextType {
  receita: Receitas[];
  setReceitas: React.Dispatch<React.SetStateAction<Receitas[]>>;
}

// Criando o contexto de usuário com tipagem correta
const receitasContext = createContext<ReceitasContextType | undefined>(undefined);

interface ReceitaProviderProps {
  children: ReactNode;
}

// Criando o Provider
export default function ReceitaProvider({ children }: ReceitaProviderProps) {
  const [receita, setReceitas] = useState<Receitas[]>([{
    nome: "Pizza de calabresa",
    descricao:"uma receita de pizza muito boa",
    id:1, 
  },
  {
    nome: "Bolo",
    descricao:"uma delicioso bolo de fubá",
    id:2, 
  }
]);

  return (
    <receitasContext.Provider value={{ receita, setReceitas }}>
      {children}
    </receitasContext.Provider>
  );
}

// Custom Hook para usar o contexto
export function useReceitas() {
  const context = useContext(receitasContext);

  // Se o contexto for indefinido, lança um erro
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }

  const { receita, setReceitas } = context;
  return { receita, setReceitas };
}
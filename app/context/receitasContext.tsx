// ReceitasContext.tsx

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import ReceitasService from '../service/receitasService';
import { Alert } from 'react-native';

interface Receita {
  id: number;
  nome: string;
  descricao: string;
  ingredientes: string;
  modoPreparo: string;
  imagemUrl?: string;
}

interface ReceitasContextType {
  receitas: Receita[];
  setReceitas: React.Dispatch<React.SetStateAction<Receita[]>>;
  buscarTodas: () => Promise<void>;
  salvarReceita: (receita: Receita) => Promise<void>;
  editarReceita: (id: number, receita: Receita) => Promise<void>;
  excluirReceita: (id: number) => Promise<void>;
  buscarReceitaPorId: (id: number) => Promise<Receita | undefined>;
  buscarReceitasDoUsuario: (usuarioId: number) => Promise<void>; 
  
}

const ReceitasContext = createContext<ReceitasContextType | undefined>(undefined);

interface ReceitasProviderProps {
  children: ReactNode;
}

export default function ReceitasProvider({ children }: ReceitasProviderProps) {
    const [receitas, setReceitas] = useState<Receita[]>([]);
    const receitasService = new ReceitasService();

    const buscarTodas = async () => {
        try {
            const response = await receitasService.buscarTodas();
            setReceitas(response.data);
        } catch (error) {
            console.error('Erro ao buscar receitas:', error);
            Alert.alert('Erro', 'Não foi possível carregar as receitas.');
        }
    };

    const buscarReceitasDoUsuario = async (usuarioId: number) => {
        try {
            const response = await receitasService.buscarPorUsuario(usuarioId);
            setReceitas(response.data);
        } catch (error) {
            console.error('Erro ao buscar receitas do usuário:', error);
            Alert.alert('Erro', 'Não foi possível carregar as receitas do usuário.');
        }
    };

    const salvarReceita = async (receita: Receita) => {
        try {
            await receitasService.salvar(receita);
            Alert.alert('Sucesso', 'Receita salva com sucesso!');
            buscarTodas();
        } catch (error) {
            console.error('Erro ao salvar a receita:', error);
            Alert.alert('Erro', 'Não foi possível salvar a receita.');
        }
    };

    const editarReceita = async (id: number, receita: Receita) => {
        try {
            await receitasService.atualizarReceita(id, receita);
            Alert.alert('Sucesso', 'Receita atualizada com sucesso!');
            buscarTodas();
        } catch (error) {
            console.error('Erro ao editar a receita:', error);
            Alert.alert('Erro', 'Não foi possível editar a receita.');
        }
    };

    const excluirReceita = async (id: number) => {
        try {
            await receitasService.excluir(id);
            setReceitas((prevReceitas) => prevReceitas.filter((receita) => receita.id !== id));
            Alert.alert('Sucesso', 'Receita excluída com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir a receita:', error);
            Alert.alert('Erro', 'Não foi possível excluir a receita.');
        }
    };

    const buscarReceitaPorId = async (id: number): Promise<Receita | undefined> => {
        try {
            const response = await receitasService.buscarPorId(id);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar a receita por ID:', error);
            Alert.alert('Erro', 'Não foi possível encontrar a receita.');
        }
    };

    return (
        <ReceitasContext.Provider
            value={{
                receitas,
                setReceitas,
                buscarTodas,
                salvarReceita,
                editarReceita,
                excluirReceita,
                buscarReceitaPorId,
                buscarReceitasDoUsuario, 
            }}
        >
            {children}
        </ReceitasContext.Provider>
    );
}

export function useReceitas() {
    const context = useContext(ReceitasContext);
    if (!context) {
        throw new Error('useReceitas deve ser usado dentro de um ReceitasProvider');
    }
    return context;
}

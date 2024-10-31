import ApiService from "./apiservice";

class ReceitasService extends ApiService {
    constructor() {
        super('/receitas');
    }

    salvar(receita: any) {
        return receita.id && receita.id !== 0 ? this.put(`/${receita.id}`, receita) : this.post('', receita);
    }

    excluir(id: number) {
        return this.delete(`/${id}`);
    }

    buscarPorId(id: number) {
        return this.get(`/detalhes/${id}`);
    }

    buscarTodas() {
        return this.get('/todas');
    }

    buscarPorUsuario(usuarioId: number) {
        return this.get(`/usuario/${usuarioId}`);
    }

    atualizarReceita(id: number, receitaAtualizada: any) {
        return this.put(`/${id}`, receitaAtualizada);
    }
}

export default ReceitasService;

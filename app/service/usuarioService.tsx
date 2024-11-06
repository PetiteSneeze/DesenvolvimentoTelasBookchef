import ApiService from "./apiservice";

class UsuarioService extends ApiService {
    constructor() {
        super('/usuarios');
    }

    validarLogin(usuario: any) {
        return this.post('/login', usuario);
    }

    salvar(usuario: any) {
        if (usuario.id == 0) {
            return this.post('', usuario);
        } else {
            return this.put(`/${usuario.id}`, usuario); // Agora incluímos o ID para alterar
        }
    }

    excluir(id: number) {
        return this.delete(`/${id}`);
    }

    buscarPorId(id: number) {
        return this.get(`/${id}`);
    }

    alterar(usuario: any) {
        return this.put(`/${usuario.id}`, usuario); // Método de alteração específico
    }
}

export default UsuarioService;

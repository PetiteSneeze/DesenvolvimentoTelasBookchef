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
            return this.put(`/${usuario.id}`, usuario);
        }
    }

    excluir(id: number) {
        return this.delete(`/${id}`);
    }

    buscarPorId(id: number) {
        return this.get(`/${id}`);
    }

    alterar(usuario: any) {
        return this.put(`/${usuario.id}`, usuario); 
    }
}

export default UsuarioService;

import ApiService from "./apiservice";

class UsuarioService extends ApiService{
    constructor() {
        super('/usuarios');
    }

    validarLogin(usuario: any){
        return this.post('/login', usuario);
    }

    salvar(usuario:any){
        if(usuario.id == 0)
            return this.post('', usuario);
        else
        return this.put('', usuario);
    }
    
    excluir(id:number){
        return this.delete(`/${id}`);
    }
    
    buscarPorId(id:number){
        return this.get(`/${id}`);
    }

}

export default UsuarioService;
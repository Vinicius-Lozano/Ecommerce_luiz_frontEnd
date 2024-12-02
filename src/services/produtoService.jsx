import http from './http';

class ProdutoService{
    static async get(id){
        try {
            const response = await http.get(`/produtos/${id}`);
            return response.data;
        } catch (error) {
            console.error('Ocorreu um erro: ', error);
        }
    }

    static async getAll(){
        try {
            const response = await http.get(`/produtos`);
            return response.data;
        } catch (error) {
            console.error('Ocorreu um erro: ', error);
        }
    }

    static async create(dados){
        try {
            const response = await http.post(`/produtos`, dados);
            return response.data;
        } catch (error) {
            console.error('Ocorreu um erro: ', error);
        }
    }

    static async update(id, dados){
        try {
            const response = await http.put(`/produtos/${id}`, dados);
            return response.data;
        } catch (error) {
            console.error('Ocorreu um erro: ', error);
        }
    }

    static async delete(id){
        try {
            const response = await http.delete(`/produtos/${id}`);
            return response.data;
        } catch (error) {
            console.error('Ocorreu um erro: ', error);
        }
    }
}

export default ProdutoService;
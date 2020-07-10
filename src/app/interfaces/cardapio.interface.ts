export interface Cardapio {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    categoria: string;
    imagem: string;
    quantidade: number;
}

export interface Categoria {
    id: number;
    nome: string;
}

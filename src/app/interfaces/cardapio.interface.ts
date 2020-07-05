export interface Cardapio {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    categoria: Categoria;
    imagem: string;
}

export interface Categoria {
    id: number;
    nome: string;
}

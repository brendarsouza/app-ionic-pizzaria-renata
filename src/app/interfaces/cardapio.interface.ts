export interface Cardapio {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    categoria: string;
    imagem: string;
    quantidade: number;
    observacao: string;
}

export interface Categoria {
    id: number;
    nome: string;
}

export interface TipoConsumo {
    id: number;
    tipo: string;
}
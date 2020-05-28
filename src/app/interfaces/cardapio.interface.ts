export interface Cardapio {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    tipo: CardapioTipo;
}

export interface CardapioTipo {
    id: number;
    nome: string;
    descricao: string;
}

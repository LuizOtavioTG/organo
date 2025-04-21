export interface Livro {
    titulo: string;
    autoria: string;
    favorito: boolean;
    genero: GeneroLiterario;
    imagem: string
}

export interface GeneroLiterario {
    id: string;
    value: string;
    livros: Livro[]
}
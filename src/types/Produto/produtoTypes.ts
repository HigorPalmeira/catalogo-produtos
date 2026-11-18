import { Categoria } from "../Categoria/categoriaTypes";

export type Produto = {
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    category: Categoria
};

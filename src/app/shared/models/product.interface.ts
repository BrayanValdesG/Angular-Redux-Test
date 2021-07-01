import { Categorie } from "./categorie.interface";

export interface Product {
    id: number;
    codigo: string;
    estado: boolean;
    precio: string;
    producto: string;
    descripcion: string;
    idCategoria: number | Categorie;
}
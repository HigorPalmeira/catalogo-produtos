
import { Categoria } from "@/types/Categoria/categoriaTypes";
import { Produto } from "@/types/Produto/produtoTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PRODUCTS_STORAGE_KEY = "@lista:produtos";

async function get(): Promise<Produto[]> {

    try {
        
        const storage = await AsyncStorage.getItem(PRODUCTS_STORAGE_KEY);

        return storage ? JSON.parse(storage) : [];

    } catch (error) {
        throw new Error("Products Get: " + error);
    }

}

async function getByCategoria(category: Categoria): Promise<Produto[]> {

    const products = await get();

    return products.filter((product) => product.category === category);

}

async function save(products: Produto[]): Promise<void> {

    try {
        await AsyncStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    } catch (error) {
        throw new Error("Products Save: " + error);
    }

}

async function add(newProduct: Produto): Promise<Produto[]> {

    const products = await get();
    const updatedProducts = [...products, newProduct];

    await save(updatedProducts);

    return updatedProducts;

}

export const productsStorage = {
    get,
    getByCategoria,
    add,
};

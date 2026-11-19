import { Categoria } from "@/types/Categoria/categoriaTypes";
import { View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type Props = {
    categories: Categoria[],
    onChangeSelect: (category: Categoria) => void,
}

export default function Select({ categories, onChangeSelect }: Props) {

    const [categorySelected, setCategorySelected] = useState<Categoria>(Categoria.Nenhuma);

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const category = event.target.value as Categoria;
        setCategorySelected(category);
        onChangeSelect(category);
    }

    return (

        <View style={styles.container}>

            <select value={categorySelected} onChange={handleChange} >
                {
                    categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))
                }
            </select>

        </View>

    );

}
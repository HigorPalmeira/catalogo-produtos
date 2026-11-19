import { RootStackParamList } from "@/routes/navigationTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, Button, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import ProdutoCard from "@/components/ProdutoCard";
import { Categoria } from "@/types/Categoria/categoriaTypes";
import { Produto } from "@/types/Produto/produtoTypes";
import { productsStorage } from "@/storage/productsStorage";

type Props = NativeStackScreenProps<
    RootStackParamList, 
    "Home"
>;

export default function Home( { navigation }: Props ) {

    const [products, setProducts] = useState<Produto[]>([]);

    async function getProducts() {

        try {
            const response = await productsStorage.get();
            setProducts(response);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível filtrar os itens.");
        }

    }

    function handleOpenRegister() {
        navigation.navigate("Register");
    }

    return (

        <View style={styles.container}>

            <Button
                title="Novo Produto"
                onPress={handleOpenRegister}
            />

            <ProdutoCard
                product={{
                    id: "123",
                    name: "Notebook",
                    description: "Notebook com 16 GB de memória RAM e armazenamento SSD.",
                    price: 3000.0,
                    quantity: 1,
                    category: Categoria.Tecnologia
                }}
            />

        </View>

    )

}
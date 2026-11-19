import { Produto } from "@/types/Produto/produtoTypes";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    product: Produto
}

export default function ProdutoCard({ product }: Props) {

    return (

        <View style={styles.card}>

            <Text style={styles.title}>
                {product.name}
            </Text>

            <Text style={styles.description}>
                {product.description}
            </Text>

            <Text style={styles.price}>
                R$ {product.price}
            </Text>

            <Text>
                Quantidade: {product.quantity}
            </Text>

            <Text>
                Categoria: {product.category}
            </Text>

        </View>

    );

}
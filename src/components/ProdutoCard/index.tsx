import { Produto } from "@/types/Produto/produtoTypes";
import { Text, View } from "react-native";

type Props = {
    product: Produto
}

export default function ProdutoCard({ product }: Props) {

    return (

        <View>

            <Text>
                {product.name}
            </Text>

            <Text>
                {product.description}
            </Text>

            <Text>
                R$ {product.price}
            </Text>

            <Text>
                {product.quantity}
            </Text>

            <Text>
                {product.category}
            </Text>

        </View>

    );

}
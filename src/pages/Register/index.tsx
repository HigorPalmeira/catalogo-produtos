import { Input } from "@/components/Input";
import Select from "@/components/Select";
import { RootStackParamList } from "@/routes/navigationTypes";
import { productsStorage } from "@/storage/productsStorage";
import { Categoria } from "@/types/Categoria/categoriaTypes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";


export default function Register() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0.0);
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState<Categoria>(Categoria.Nenhuma);

    function handleChangePrice(value: string) {
        setPrice(Number(value));
    }

    function handleChangeQuantity(value: string) {
        setQuantity(Number(value));
    }

    async function handleAdd() {

        if (name.trim() === "") {
            Alert.alert("Nome Inválido", "O campo nome não pode estar vazio!");
            return;
        }

        if (description.trim() === "") {
            Alert.alert("Descrição Inválida", "O campo descrição não pode estar vazio!");
            return;
        }

        if (price <= 0) {
            Alert.alert("Preço Inválido", "O campo preço não pode ser nulo ou negativo!");
            return;
        }

        if (quantity <= 0) {
            Alert.alert("Quantidade Inválida", "O campo quantidade não pode ser nulo ou negativo!");
            return;
        }

        const newProduct = {
            id: Math.random().toString(36).substring(2),
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            category: category
        };

        console.log(newProduct);

        await productsStorage.add(newProduct);

        Alert.alert("Concluído", "Novo produto cadastrado com sucesso!");

        navigation.goBack();

    }
    
    return (

        <View>

            <Text>Nome:</Text>
            <Input
                value={name}
                onChangeText={setName}
            />

            <Text>Descrição:</Text>
            <Input
                value={description}
                onChangeText={setDescription}
            />

            <Text>Preço:</Text>
            <Input
                value={price.toString()}
                onChangeText={handleChangePrice}
            />

            <Text>Quantidade:</Text>
            <Input
                value={quantity.toString()}
                onChangeText={handleChangeQuantity}
            />

            <Text>Categoria:</Text>
            <Select
                categories={Object.values(Categoria)}
                onChangeSelect={setCategory}
            />

            <Button
                title="Cadastrar"
                onPress={handleAdd}
            />

        </View>

    );

}
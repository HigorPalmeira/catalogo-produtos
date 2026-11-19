import { Input } from "@/components/Input";
import { productsStorage } from "@/storage/productsStorage";
import { Categoria } from "@/types/Categoria/categoriaTypes";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


export default function Register() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0.0);
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState<Categoria>(Categoria.Nenhuma);


    function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleChangeDescription(event: React.ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }

    function handleChangePrice(event: React.ChangeEvent<HTMLInputElement>) {
        setPrice(Number(event.target.value));
    }

    function handleChangeQuantity(event: React.ChangeEvent<HTMLInputElement>) {
        setQuantity(Number(event.target.value));
    }

    function handleChangeCategory(event: React.ChangeEvent<HTMLSelectElement>) {
        const category = event.target.value as Categoria;
        setCategory(category);
    }

    async function handleAdd() {

        const newProduct = {
            id: Math.random().toString(36).substring(2),
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            category: category
        };

        console.log(newProduct);

        // await productsStorage.add(newProduct);

    }
    
    return (

        <View>

            <Text>Nome:</Text>
            <Input
                value={name}
                onChange={handleChangeName}
            />

            <Text>Descrição:</Text>
            <Input
                value={description}
                onChange={handleChangeDescription}
            />

            <Text>Preço:</Text>
            <Input
                value={price.toString()}
                onChange={handleChangePrice}
            />

            <Text>Quantidade:</Text>
            <Input
                value={quantity.toString()}
                onChange={handleChangeQuantity}
            />

            <Text>Categoria:</Text>
            <select>
                <option>{Categoria.Bebida}</option>
                <option>{Categoria.Comida}</option>
                <option>{Categoria.Limpeza}</option>
            </select>

            <Button
                title="Cadastrar"
                onPress={handleAdd}
            />

        </View>

    );

}
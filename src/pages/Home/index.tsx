import { RootStackParamList } from "@/routes/navigationTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";

type Props = NativeStackScreenProps<
    RootStackParamList, 
    "Home"
>;

export default function Home( { navigation }: Props ) {

    function handleOpenRegister() {
        navigation.navigate("Register");
    }

    return (

        <View style={styles.container}>

            <View style={styles.card}>

                <Text style={styles.title}>
                    Notebook
                </Text>

                <Text style={styles.description}>
                    Notebook com 16 GB de memória RAM e armazenamento SSD.
                </Text>

                <Text style={styles.price}>
                    R$ 3.500,00
                </Text>

                <Button
                    title="Ver detalhes"
                    onPress={handleOpenRegister}
                />

            </View>

        </View>

    )

}
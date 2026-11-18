
import Home from "@/pages/Home";
import Register from "@/pages/Register";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./navigationTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {

    return (

        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: "#FFFFFF",
                headerStyle: {
                    backgroundColor: "#2c46B1",
                },
                contentStyle: {
                    backgroundColor: "#F1F3F8",
                },
            }}>

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Produtos",
                }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: "Cadastrar Produto",
                }}
            />

        </Stack.Navigator>

    );

}

import { Stack } from 'expo-router';

export default function Layout() {
    return(
        <Stack 
        screenOptions={{
            headerStyle: {
                backgroundColor: "black"
            },
            headerTintColor: "white"
        }}>
            <Stack.Screen name="index" options={{ title: "Home" }}/>
            <Stack.Screen name="login" options={{ title: "Login" }}/>
            <Stack.Screen name="register" options={{ title: "Registro" }}/>
            <Stack.Screen name="dashboard" options={{ title: "Dashboard" }}/>
            <Stack.Screen name="profile" options={{ title: "Perfil" }}/>
            <Stack.Screen name="settings" options={{ title: "Settings" }}/>
            <Stack.Screen name="forgotPassword" options={{ title: "Senha esquecida" }}/>
            <Stack.Screen name="newItem" options={{ title: "Novo Item" }}/>
        </Stack>
    );
}
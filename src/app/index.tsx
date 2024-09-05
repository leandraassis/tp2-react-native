import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold'}}>HOME</Text>
      <StatusBar style="auto" />
      <Link href={"/login"}>Ir para tela LOGIN</Link>
      <Link href={"/register"}>Ir para tela REGISTRO</Link>
      <Link href={"/dashboard"}>Ir para tela DASHBOARD</Link>
      <Link href={"/profile"}>Ir para tela PROFILE</Link>
      <Link href={"/settings"}>Ir para tela SETTINGS</Link>
      <Link href={"/forgotPassword"}>Ir para tela ESQUECI MINHA SENHA</Link>
      <Link href={"/newItem"}>Ir para tela NOVO ITEM</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
});

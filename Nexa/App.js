import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login/Login';
import Perfil from './src/pages/perfil/Perfil';
import Cadastro from './src/pages/cadastro/Cadastro';
import EditarPerfil from './src/pages/editarPerfil/EditarPerfil';
import { SafeAreaView } from 'react-native-web';
import BoasVindas from './src/pages/boasVindas/BoasVindas';
import Feed from './src/pages/feed/Feed';

export default function App() {
  return (
      <View style={styles.container}>
        <BoasVindas />
        <Perfil />
        <Login />
        <Feed />
        <StatusBar style="auto" />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

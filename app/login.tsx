import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha email e senha');
      return;
    }

    if (email === 'teste@email.com' && password === '123456') {
      router.replace('/(tabs)');
    } else {
      Alert.alert('Erro', 'Use: teste@email.com / 123456');
    }
  };

  return (
    <View style={styles.container}>
      {/* Boneco + DuoHealth */}
      <View style={styles.duoHealthContainer}>
        <Image
          source={require('../assets/images/boneco.png')}
          style={styles.boneco}
          resizeMode="contain"
        />
        <Text style={styles.title}>DuoHealth</Text>
        <Text style={styles.subtitle}>Sua Jornada para o Bem Estar</Text>
      </View>

      {/* Campos de login */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Botão de login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar na Missão</Text>
      </TouchableOpacity>

      {/* Logo Care Plus abaixo do botão */}
      <Image
        source={require('../assets/images/Logo.png')}
        style={styles.logoCarePlus}
        resizeMode="contain"
      />

      {/* Dados de teste */}
      <Text style={styles.demoText}>
        Para testar:{"\n"}
        Email: teste@email.com{"\n"}
        Senha: 123456
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F8F9FA'
  },
  duoHealthContainer: {
    alignItems: 'center',
    marginBottom: 40
  },
  boneco: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0079c8'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666'
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16
  },
  button: {
    backgroundColor: '#0079c8',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  logoCarePlus: {
    width: 180,
    height: 60,
    alignSelf: 'center',
    marginTop: 10
  },
  demoText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
    lineHeight: 20
  }
});

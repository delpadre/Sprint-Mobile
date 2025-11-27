import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function EditarPerfilScreen() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const salvar = () => {
    alert("Perfil atualizado com sucesso!");
    router.push("/(tabs)/profile");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/(tabs)/profile")}
      >
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Editar Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor="#eee"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#eee"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#eee"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#219ebc",
    padding: 20,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#023047",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#8ecae6",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    color: "#023047",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#023047",
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
